const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Bread = require('../../models/Bread');
const User = require('../../models/User');
const Review = require('../../models/Review')
const validateReviewInput = require('../../validation/reviews');

router.post('/', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateReviewInput(req.body);
              
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const review = new Review({
            user: req.body.user,
            bread: req.body.bread,
            body: req.body.body
          });
        review.save()
            .then(review => res.json(review))
            .catch(err =>res.status(400).json({ err }))
    }
);

router.get('/user/:user_id', 
    (req, res) => {
        Review.find({user: req.params.user_id})
            .then(reviews => res.json(reviews))
        }
);
router.get('/', (req, res) => {
        Review.find({})
            .then(reviews => res.json(reviews))
            .catch(err => res.status(400).json({ err }))
        }
);
router.get('/:review_id', (req, res) => {
        Review.find({_id: req.params.review_id})
            .then(review => res.json(review))
            .catch(err => res.status(400).json({ err }))
        }
);
router.get('/bread/:bread_id', 
    (req, res) => {
        debugger
        Review.find({bread: req.params.bread_id})
            .then(reviews => res.json(reviews))
            .catch(err => res.status(400).json({ err }))
        }
);


router.delete('/:review_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Review.findByIdAndDelete(req.params.review_id, function (err, review) { 
            if (err){ 
                res.status(404).json({ noItemFound: 'Hmm, that review does not exist' });
            } 
            else{ 
                res.json(review);
            } 
        })
    }
)

router.patch('/:review_id', 
        passport.authenticate('jwt', { session: false }),
        (req, res) => {
            const { errors, isValid } = validateReviewInput(req.body);
              
            if (!isValid) {
                return res.status(400).json(errors);
            }
            Review.findByIdAndUpdate(
                req.params.review_id,
                req.body,
                {new: true},

                (err, review) =>{
                    if(review) return res.status(500).send(err);
                    return res.send(review);
                }
            )

        }
)

module.exports = router;