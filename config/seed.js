const { sequelize } = require('../models')
const User = sequelize.models.User

seed = async () => {
    try {
        await User.create({ username: 'user', password: 'pass'})
    } catch(e) {
        console.log(e)
    }
}

module.exports = seed