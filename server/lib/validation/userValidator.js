const { body, validationResult } = require('express-validator')
const usersignupValidationRules = () => {
  return [
    // username must be an email
    body('email').isEmail(),
    body('name').isLength({ min: 3 }),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
  ]
}

const userloginValidationRules = () => {
  return [
    // username must be an email
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  usersignupValidationRules,
  userloginValidationRules,
  validate,
}