const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Breadprofile = require('../../models/Breadprofile');
const breadprofile = require('../../validation/breadprofile');
const validateBreadprofileInput = require('../../validation/breadprofile');


router.post('/',
        passport.authenticate('jwt', { session: false }),
        (req, res) => {
            const { errors, isValid } = validateBreadprofileInput(req.body);
              
            if (!isValid) {
              return res.status(400).json(errors);
            }
        
            const newBreadprofile = new Breadprofile({
              user: req.user.id,
              thin: req.body.thin,
              wholewheat: req.body.wholewheat,
              filling: req.body.filling,
              savory: req.body.savory
            });
        
            newBreadprofile.save().then(breadprofile => res.json(breadprofile));
          }
);


router.get('/user/:user_id',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Breadprofile.find({user: req.params.user_id})
            .then(breadprofile => res.json(breadprofile[breadprofile.length-1]))
            .catch(err => 
                    res.status(404).json({ noBreadprofileFound: 'No profile found for this user' })
                )
    })



module.exports = router;