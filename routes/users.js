const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');

// MODEL
const User = require('../models/User');

// GET
router.get('/', (req, res) => {
    res.json({ status: 1 })
});

// POST
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    bcryptjs.hash(password, 10, (err, hash) => {
        const user = new User({
            username,
            password: hash
        });
    
        user.save()
            .then((data) => res.json(data))
            .catch((err) => res.json(err))
      });
});

router.post('/authentication', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if(err) {
            throw err;
        } else if (!username) {
            res.json({
                status: false,
                message: 'Authentication failed, user not found.' 
            })
        } else {
            bcryptjs.compare(password, user.password)
                .then((pass) => {
                    if(!pass) {
                        res.json({
                            status: false,
                            message: 'Authentication failed, wrong password.'
                         })
                    } else {
                        
                    }
                })
        }
    })
})

module.exports = router;

