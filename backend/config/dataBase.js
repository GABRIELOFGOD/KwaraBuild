const mongoose = require('mongoose')

const dbConnect = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Data Base Connected Succesfully'))
    .catch(err => console.log('Database Connection Failed', err))
}

module.exports = dbConnect;