// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello world!')
// })

// app.listen(3000)


// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express() // part 6 part 4 shows this isnt here any more ??
const methodOverride = require('method-override')


// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Controllers & Routes
app.use('/places', require('./controllers/places'))

// Define Routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)

// part 5 new body parser
app.use(express.urlencoded({ extended: true }))


