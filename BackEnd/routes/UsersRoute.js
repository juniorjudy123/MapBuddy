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

//login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        //valdate input
        if (!username || !password) {
            return res.status(400).json({ error: 'All fields are required' })
        }
        //find user
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "wrong credentials" })
        }
        //validate password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: "wrong credentials" })
        }
        //otherwise send success message
        res.status(200).json({ _id: user._id, username: username })
    }
    catch (error) {
        console.error("Error during login", error);
        res.status(500).json(error);
    }

})
module.exports = router