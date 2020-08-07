var express = require('express');
var router = express.Router();
const { userloginValidationRules, usersignupValidationRules, validate } = require('../lib/validation/userValidator')
const User = require('../controller/user')
router.post('/login',userloginValidationRules(), validate, User.login)
router.post('/signup',usersignupValidationRules(), validate, User.signup)
module.exports = router;
