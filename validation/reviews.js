const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReviewInput(data){
    let errors = {};

    data.body = validText(data.body) ? data.body : '';

    if(Validator.isEmpty(data.body)) {
        errors.body = 'Oops! Did you forget to write a review?';
    }
    if(Validator.isEmpty(data.username)) {
        errors.body = 'Oops! Who wrote this review? No user found';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}