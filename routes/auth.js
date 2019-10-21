const router = new require('express').Router()
const { sequelize } = require('../models/')
const User = sequelize.models.User

router.use('/', (req, res, next) => {
    console.log('auth router')
    next()
})

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body)
        req.login(user, (e) => {
            if(e) {
                throw e
            }
        })
        return res.status(200).send({ status: 200, result: { username: user }})
    } catch(e) {
        return res.status(200).send({ status: 500, result: undefined, error: e.message  })
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email }})
        if(!user.comparePassword(req.body.password))
        {
            throw new Error("Password Incorrect")
        }
        req.login(user, (e) => {
            if(e) {
                throw e
            }
        })
        return res.status(200).send({ status: 200, result: { username: user }})
    } catch(e) {
        return res.status(200).send({ status: 500, result: undefined, error: e.message,  })
    }
})


router.post('/update', async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id)
        if(user == null || user == undefined)
        {
            throw new Error(`No User with id ${req.user.id}`)
        }
        await user.update(req.body)
        console.log(user)
        return res.status(200).send({ status: 200, result: user})
    } catch (e) {
        return res.status(200).send({ status: 500, result: undefined, error: e.message})
    }
})

router.get('/logout', async (req, res) => {
    try {
        req.logout()
        return res.status(200).send({ status: 200, result: undefined })
    } catch (e) {
        return res.status(200).send({ status: 500, result: undefined, error: e.message })
    }
})

module.exports = router