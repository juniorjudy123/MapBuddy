const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');


//register

router.post('/register', async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);


        //create new useraccount
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })


        //save new user and response
        const user = await newUser.save();
        res.status(200).json(user._id)
    }
    catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router