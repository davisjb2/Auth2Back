const express = require('express')
const connectHistoryApi = require('connect-history-api-fallback')
const bodyparser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const app = express()

app.use(express)
app.use(bodyparser.json())
app.use(cors, ({
    origin: [
        'http://localhost:8080'
    ],
    credentials: true
}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (error, user) => {
        if(error) return done(error)
        if(!user) return done(null, false)
        if(!user.comparePassword(password)) return done(null, false)
        return done(null, user)
    })
}))

passport.serializeUser((user, done) => {
    return done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findByPk(id)
        .then(user => {
            return done(null, user)
        }).catch(error => {
            return done(error, null)
        })
})

app.use('/', express.static(path.join(__dirname, config.pathToStatic())))
app.use('/api', routes)