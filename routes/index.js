var express = require('express');
var router = express.Router();

var user = require('../controllar/usercontrollar')

/* GET home page. */

router.post('/insert', user.register)

router.post('/check_OTP', user.check_OTP)

module.exports = router;
