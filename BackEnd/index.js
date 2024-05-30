const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const port = process.env.PORT


//mongodb config

mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,// ensures that Mongoose uses the new Server Discovery and Monitoring engine

}).then(() => {
    console.log('connected to database');
})
    .catch((error) => {
        console.error("Error connecting to database", error);
    })

//listeners
app.listen(port, () => {
    console.log(`server started listening on port ${port}`);
})


