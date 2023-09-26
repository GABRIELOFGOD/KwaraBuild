const router = require('express').Router()
const {userRegistration, getData} = require('../controller/userCtrl')

router.route('/register').post(userRegistration)
router.route('/text').post(getData)

module.exports = router;