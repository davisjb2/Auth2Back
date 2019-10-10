const router = new require('express').Router()
const { sequelize } = require('../models/')
const User = sequelize.models.User

router.use('/', (req, res, next) => {
    console.log('auth router')
    next()
})

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body.username, req.body.password)
        req.login(user, (e) => {
            if(e) {
                throw e
            }
        })
        return res.status(200).send({ status: 200, result: { username: user.username }})
    } catch(e) {
        return res.status(200).send({ status: 500, result: undefined, error: e.message,  })
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.body.username }})
        if(!user.comparePassword(req.body.password))
        {
            throw new Error("Password Incorrect")
        }
        req.login(user, (e) => {
            if(e) {
                throw e
            }
        })
        return res.status(200).send({ status: 200, result: { username: user.username }})
    } catch(e) {
        return res.status(200).send({ status: 500, result: undefined, error: e.message,  })
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