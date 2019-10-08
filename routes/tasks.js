const router = new require('express').Router()
const { sequelize } = require('../models/')
const Task = sequelize.models.Task
const User = sequelize.models.User

router.use('/', (req, res, next) => {
    if(req.user !== undefined) {
        next()
    } else {
        return res.status(200).send({ status: 401, result: undefined, error: "unauthorized" })
    }
})

router.get('/', async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id)
        const tasks = await user.getTasks()
        return res.status(200).send({ status: 200, result: tasks})
    } catch (e) {
        return res.status(200).send({ status: 500, result: undefined, error: e.message})
    }
})

router.post('/create', async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id)
        const task = await Task.create({
            name: req.body.name,
            completed: req.body.completed,
            dueDate: req.body.dueDate,
            
        })
        return res.status(200).send({ status: 200, result: tasks})
    } catch (e) {
        return res.status(200).send({ status: 500, result: undefined, error: e.message})
    }
})

module.exports = router