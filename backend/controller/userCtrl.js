const User = require('../model/user')


// ========== USER REGISTRATION CONTROLLER ============//
const userRegistration = async (req, res) => {
  //const details = req.body
  //console.log(details)
  res.render('index.html')
}




module.exports = { userRegistration }