const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Bread = require('../../models/Bread');
const User = require('../../models/User')
const CartItem = require('../../models/CartItem');
const validateCartItemInput = require('../../validation/cartitem');

router.post('/', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateCartItemInput(req.body);
              
        if (!isValid) {
            return res.status(400).json(errors);
        }
        debugger
        const item = new CartItem({
            user: req.body.user_id,
            bread: req.body.bread_id,
            price: req.body.price
          });
        debugger
        item.save()
            .then(item => res.json(item))
            .catch(err =>res.status(400).json({ err }))
    }
);

router.post('/mm', 
  
)

module.exports = router;