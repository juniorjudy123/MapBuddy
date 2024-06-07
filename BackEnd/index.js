const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const pinRoute = require('./routes/PinsRoute.js');
const userRoute = require('./routes/UsersRoute.js');
const cors = require('cors');



const app = express();
const port = process.env.PORT

// is used to parse incoming JSON requests. It is a built-in middleware function in Express that parses incoming requests with JSON payloads and makes the parsed data available in req.body.

app.use(express.json());

cors
app.use(cors({
    origin: [],
    methods: ['GET', 'POST'],
    credentials: true,
}));
// //default response on deployment
// app.get('/', (req, res) => {
//     res.json("Hello");
// });


//mongodb config

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('connected to database');
    })
    .catch((error) => {
        console.error("Error connecting to database", error);
    });


app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute)

//listeners
app.listen(port, () => {
    console.log(`server started listening on port ${port}`);
})


