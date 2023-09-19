const express = require('express')
const router = require('./routes/userRoute')
const cookieParser = require('cookie-parser')
const dbConnect = require('./config/dataBase')
require('dotenv').config()

// ======= DATABASE CONNECTION =====//
// dbConnect()
const PORT = process.env.PORT || 4500

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/', router)

app.listen(PORT, ()=> {console.log(`App Listening at PORT ${PORT}`)})