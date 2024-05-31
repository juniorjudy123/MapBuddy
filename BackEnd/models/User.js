const mongoose = require('mongoose')

//creating UserSchema object

const UserSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: true,
        min: 3,
        max: 15,
        unique: true,
    },

    email: {
        type: 'string',
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: 'string',
        required: true,
        min: 6,
    }
}, { timestamps: true });


module.exports = mongoose.model("user", UserSchema);