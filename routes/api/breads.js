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

router.get("/matches", (req, res) => {
    Bread.find({ 
        thin: { $eq: req.body.thin },
        wholewheat: { $eq: req.body.wholewheat }, 
        savory: { $eq: req.body.savory },
        filling: { $eq: req.body.filling }
    })
        .then(breads => res.json(breads));
})

router.get("/:bread_id", (req, res) => {
    
    Bread.findById(req.params.bread_id)
        .then(bread => res.json(bread))
        .catch(err => 
            res.status(400).json({ nobreadfound: 'No bread found with that id!' })
        );
});

router.get("/", (req, res) => {
    Bread.aggregate(
        [ { $sample: { size: 20 } } ]
    )
        .then( breads => res.json(breads));
})

router.patch('/:bread_id', (req, res) => {
    const { errors, isValid } = validateBreadInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Bread.findByIdAndUpdate(
        req.params.bread_id,
        req.body,
        {new: true},

        (err, bread) => {
            if (err) return res.status(500).send(err);
            return res.send(bread);
        }
    )
})

module.exports = router;
