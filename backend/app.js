const express = require('express')
const router = require('./routes/userRoute')
const cookieParser = require('cookie-parser')
const dbConnect = require('./config/dataBase')
const cors = require('cors')
require('dotenv').config()

const app = express()

// ======= CROSS ORIGIN ALLOWED ====== //
app.use(cors({
  origin: '*',
  //origin: 'http://localhost:5173',
  credentials:true
}))
// ======= DATABASE CONNECTION =====//
// dbConnect()
const PORT = process.env.PORT || 4500

app.use(express.json())
app.use(cookieParser())

app.use('/api', router)

app.listen(PORT, ()=> {console.log(`App Listening at PORT ${PORT}`)})