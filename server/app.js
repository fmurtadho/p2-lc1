// basic express
const express = require('express')
const app = express()
var cors = require('cors')
require('dotenv').config()

// routes
const routes = require('./routes')
const userRoutes = require('./routes/userRoute')

const mongoose = require('mongoose')
mongoose.connect(process.env.mlab, { useNewUrlParser: true, useFindAndModify : false })
const db = mongoose.connection
db.once('open', function() {
    console.log('mongodb connected')
})

//cors
app.use(cors())

//parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//path
app.use('/',routes)
app.use('/users',userRoutes)

//port
const port = 3000
app.listen(port, function() {
    console.log('listening on port', port)
})