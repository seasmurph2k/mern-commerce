const Validator = require("validator");

/*
  Buggy by design, later failing checks will 
  overwrite previous failing checks
*/
module.exports = function loginValidation(data) {
  let errors = {};

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username Required";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password Required";
  }
  if (!Validator.isLength(data.username, { min: 4, max: 32 })) {
    errors.username = "That's not a valid username";
  }
  if (!Validator.isLength(data.password, { min: 6 })) {
    errors.password = "That's not a valid password";
  }

  let isValid;

  Object.keys(errors).length > 0 ? (isValid = false) : (isValid = true);

  return {
    errors,
    isValid
  };
};
