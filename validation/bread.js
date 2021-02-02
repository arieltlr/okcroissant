const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateBreadInput(data){
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.origin = validText(data.origin) ? data.origin : '';
    data.wholewheat = validText(data.wholewheat) ? data.wholewheat : 'false';
    data.description = validText(data.description) ? data.description : '';
    data.thin = validText(data.thin) ? data.thin : 'false';
    data.savory = validText(data.savory) ? data.savory : 'false';
    data.filling = validText(data.filling) ? data.filling : 'false';
    data.image = validText(data.image) ? data.image : '';

    if (!Validator.isLength(data.name, { min: 2, max: 30 })){
        errors.name = 'Bread name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.name)){
        errors.name = 'Bread name field is required';
    }

    if (!Validator.isLength(data.origin, { min: 4, max: 30 })){
        errors.origin = 'Origin must be between 4 and 30 characters';
    }

    if (Validator.isEmpty(data.origin)){
        errors.origin = 'Origin field is required';
    }

    if (!Validator.isBoolean(data.wholewheat)){
        errors.wholewheat = "Field must be true or false";
    }

    if (!Validator.isLength(data.description, { min: 30, max: 1000 })){
        errors.description = "Description must be between 30 and 500 characters";
    }

    if (Validator.isEmpty(data.description)){
        errors.description = "Description field is required."
    }

    if (!Validator.isBoolean(data.thin)){
        errors.thin = "Field must be true or false";
    }

    if (!Validator.isBoolean(data.savory)){
        errors.savory = "Field must be true or false";
    }

    if (!Validator.isBoolean(data.filling)){
        errors.filling = "Field must be true or false";
    }

    if (Validator.isEmpty(data.image)){
        errors.image = "Image field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}