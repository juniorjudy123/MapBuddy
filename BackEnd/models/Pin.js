const mongoose = require('mongoose')

//creating PinSchema object

const PinSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: true,

    },
    title: {
        type: 'string',
        required: true,
        min: 3

    },
    description: {
        type: 'string',
        required: true,
        min: 4,
    },

    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },

    latitude: {
        type: Number,
        required: true,

    },

    longitude: {
        type: Number,
        required: true,

    }



}, { timestamps: true });


module.exports = mongoose.model("Pin", PinSchema);