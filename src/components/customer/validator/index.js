'use strict';

let errors = [];

/**
 *
 */
function ValidationContract() {
  errors = [];
}

ValidationContract.prototype.isRequered = (value, message) => {
  if (!value || value.length <= 0) {
    errors.push({ message: message });
  }
}

ValidationContract.prototype.isEmail = (value, message) => {
  var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  if (!reg.test(value)) {
    errors.push({ message: message });
  }
}

ValidationContract.prototype.errors = () => {
  return errors;
}

ValidationContract.prototype.clear = () => {
  errors = [];
}

ValidationContract.prototype.isValid = () => {
  return errors.length === 0;
}

module.exports = ValidationContract;
