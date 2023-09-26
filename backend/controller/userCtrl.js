const User = require('../model/user')


// ========== USER REGISTRATION CONTROLLER ============//
const userRegistration = async (req, res) => {
  console.log(req.body)
  console.log('YES')
  const {name, email, phone, password} = req.body
  try{
    console.log(name, email, phone, password)
  }catch(err){
    res.status(401).json({error: 'An error occur, check your internet and try again. if this error persists, contact our support'})
  }
}

const getData = (req, res) => {
  console.log(req.body)
  try{
    res.status(201).json({msg: 'text'})
  }catch(err){
    res.status(401).json({error: 'error'})
  }
}




module.exports = { userRegistration, getData }