// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello world!')
// })

// app.listen(3000)


require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.render('home')
  })  

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.send('Hello world home page')
})

app.get('*', (req, res) => {
  res.send('404 page')
})

app.listen(process.env.PORT)

