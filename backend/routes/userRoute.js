const router = require('express').Router()
const {userRegistration} = require('../controller/userCtrl')

router.route('/').get(userRegistration)

module.exports = (router)