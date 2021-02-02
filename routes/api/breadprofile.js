const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Breadprofile = require('../../models/Breadprofile');
const validateBreadprofileInput = require('../../validation/breadprofile');


router.post('/',
        passport.authenticate('jwt', { session: false }),
        (req, res) => {
            Breadprofile.findOne({user: req.user.id}).then(user =>{
                if(user){
                    return res.status(400).json({user: "Bread profile created already!"})
                }else{
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
            })
           
          }
);

// router.patch('/user/:user_id', 
//         passport.authenticate('jwt', { session: false }),
//         (req, res) => {
//             const { errors, isValid } = validateBreadprofileInput(req.body);
              
//             if (!isValid) {
//                 return res.status(400).json(errors);
//             }

//             Breadprofile.findOne({user: req.params.user_id}).then(
//                 breadprofile => { 
//                 if(breadprofile){
//                     // debugger
//                     const newBreadprofile = new Breadprofile({
//                         user: req.user.id,
//                         thin: req.body.thin,
//                         wholewheat: req.body.wholewheat,
//                         filling: req.body.filling,
//                         savory: req.body.savory
//                       });
//                     // debugger
//                     // Breadprofile.deleteOne({'_id': ObjectId(breadprofile.id)})
//                     Breadprofile.findByIdAndRemove( req.params.user_id, (err, profile) => {
//                         // As always, handle any potential errors:
//                         if (err) return res.status(500).send(err);
//                         // We'll create a simple object to send back with a message and the id of the document that was removed
//                         // You can really do this however you want, though.
//                         const response = {
//                             message: "Profile successfully deleted"
//                         };
//                         return res.status(200).send(response);
//                     });
//                     newBreadprofile.save().then(breadprofile => res.json(breadprofile));
//                 }else{
//                 return res.status(400).json({breadprofile: "Bread profile doesn't exist!"})
//             }
//         })
    // }  
// )
router.patch('/:breadprofile_id', 
        passport.authenticate('jwt', { session: false }),
        (req, res) => {
            const { errors, isValid } = validateBreadprofileInput(req.body);
              
            if (!isValid) {
                return res.status(400).json(errors);
            }
            debugger
            Breadprofile.findByIdAndUpdate(
                req.params.breadprofile_id,
                req.body,
                {new: true},

                (err, profile) =>{
                    debugger
                    if(err) return res.status(500).send(err);
                    return res.send(profile);
                }
            )

        }
)



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