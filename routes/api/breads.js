const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Bread = require('../../models/Bread');
const validateBreadInput = require('../../validation/bread');

router.post('/', 
    (req, res) => {

        const { errors, isValid } = validateBreadInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors)
        }

        const newBread = new Bread({
            name: req.body.name,
            origin: req.body.origin,
            wholewheat: req.body.wholewheat,
            description: req.body.description,
            thin: req.body.thin,
            savory: req.body.savory,
            filling: req.body.filling,
            image: req.body.image
        });

        newBread.save().then(bread => res.json(bread));
    }   
);

module.exports = router;
