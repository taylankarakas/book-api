const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const tokenVerify = require('../token_verify_middleware');

// MODEL
const User = require('../models/User');

// GET
router.get('/user', tokenVerify, (req, res) => {
    res.json(req.decode)
});

// POST REGISTER
router.post('/register', (req, res) => {
   const { username, password } = req.body;
   bcryptjs.hash(password, 10, (err, hash) => {
       if(err) {
           throw err;
       } else {
           const user = new User({
               username,
               password: hash
           });

           user.save()
            .then((user) => res.json(user))
            .catch((err) => res.json(err))
       }
   });
});

// POST AUTHENTICATION
router.post('/authentication', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if(err) {
            throw err;
        } else if(!user) {
            res.json({
                status: false,
                message: 'Authentication failed, user not found.'
            })
        } else {
            bcryptjs.compare(password, user.password, (err, response) => {
                if(err) {
                    throw err;
                } else if(response) {
                    //response = true / false
                    const payload = {
                        id: user._id
                    };
                    const token = jwt.sign(payload, req.app.get('api_secret_key'), { expiresIn: '100days' });
                    res.json({
                        status: true,
                        token
                    });
                }
                else {
                    res.json({
                        status: false,
                        message: 'Authentication failed, password wrong.'
                     })
                }
            });
        }
    })
})

module.exports = router;

