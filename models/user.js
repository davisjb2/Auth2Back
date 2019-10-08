const bycrypt = require('bcryptjs')
const Model = require('sequelize').Model

const hashPassword = (user, options) => {
    user.setDataValue('password', bycrypt.hashSync(user.password))
}

const UserModel = (sequelize, DataTypes) => {
    class User extends Model {}
    User.init({
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING(256)
    }, {
        sequelize,
        modelName: 'User',
        hooks: {
            beforeCreate: hashPassword
        }
    })
    User.prototype.comparePassword = (password) => {
        return bycrypt.compareSync(password, this.password)
    }
    return User
}

module.exports = UserModel