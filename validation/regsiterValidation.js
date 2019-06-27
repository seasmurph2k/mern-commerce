const Validator = require("validator");

module.exports = function registerValidation(data) {
  let errors = {};

  //empty check
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username Required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email Required";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password Required";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password = "Confirmation Password Required";
  }
  //Min check
  if (!Validator.isLength(data.username, { min: 4, max: 32 })) {
    errors.username = "Username must be between 4 and 32 characters";
  }
  if (!Validator.isLength(data.password, { min: 6 })) {
    errors.password = "Password must be at least 6 characters lond";
  }
  //isEmail
  if (!Validator.isEmail(data.email)) {
    errors.email = "Must be a valid email address";
  }
  //passwords match
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match.";
  }
  let isValid;

  Object.keys(errors).length > 0 ? (isValid = false) : (isValid = true);

  return {
    errors,
    isValid
  };
};
