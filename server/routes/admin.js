var express = require('express');
var router = express.Router();
const { usersignupValidationRules, userloginValidationRules, validate } = require('../lib/validation/userValidator')
var admin = require('./../controller/admin')
const auth = require('./../lib/auth/adminAuth')
const superAuth = require('./../lib/auth/superAdminAuth')

router.post('/', usersignupValidationRules(), validate, auth, admin.addAdmin );
router.get('/', auth, admin.getAdmin );
router.delete('/:id',superAuth, admin.deleteAdmin)

module.exports = router;
