require('dotenv').config()

const express = require('express')
const expressLayout = require('express-ejs-layouts')
const connectDB = require('./server/config/db')
const app = express() 
const PORT = 3000 || process.env.PORT

// Connect the Database
connectDB();

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(express.static("public")) 

// Templating Engine 
app.use(expressLayout)
app.set('view engine','ejs')
app.set('layout','./layouts/main')


app.use('/', require('./server/routes/main'))
app.use('/', require('./server/routes/admin'))

app.listen(3000)