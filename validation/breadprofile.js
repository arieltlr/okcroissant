const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateBreadprofileInput(data){
    let errors = {};

    data.thin = validText(data.thin) ? data.thin : "false";
    data.wholewheat = validText(data.wholewheat) ? data.wholewheat : "false";
    data.filling = validText(data.filling) ? data.filling : "false";
    data.savory = validText(data.savory) ? data.savory : "false";

    if (!Validator.isBoolean(data.thin)) {
        errors.thin = "Field must be true or false"
    }

    if (Validator.isEmpty(data.thin)) {
        errors.thin = "Field is required"
    }

    if (!Validator.isBoolean(data.wholewheat)) {
        errors.wholewheat = "Field must be true or false"
    }

    if (Validator.isEmpty(data.wholewheat)) {
        errors.wholewheat = "Field is required"
    }

    if (!Validator.isBoolean(data.filling)) {
        errors.filling = "Field must be true or false"
    }

    if (Validator.isEmpty(data.filling)) {
        errors.filling = "Field is required"
    }

    if (!Validator.isBoolean(data.savory)) {
        errors.savory = "Field must be true or false"
    }

     if (Validator.isEmpty(data.savory)) {
        errors.savory = "Field is required"
    }

    return {
        errors, 
        isValid: Object.keys(errors).length === 0
    }
}