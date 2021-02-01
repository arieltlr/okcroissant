const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Breadprofile = require('../../models/Breadprofile');
const validateTweetInput = require('../../validation/breadprofile');



router.post('/user/:user_id',
    passport.authenticate('jwt', { session: false }),
    Breadprofile.find({})
)