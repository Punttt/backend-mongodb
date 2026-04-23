const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Initierar express
const app = express();
const port = process.env.PORT || 3000;

// Tillåter JSON och cross origin CORS
app.use(cors());
app.use(express.json());

// Ansluter till mongoDB via URL i .env
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("Error connecting to database: " + error));


// Schema - workexperience
const WorkExperienceSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: true
    },
    jobtitle: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    startdate: {
        type: String,
        required: true
    },
    enddate: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
});

// Modell utifrån scheman
const WorkExperience = mongoose.model("WorkExperience", WorkExperienceSchema);

// Routes


// Startar servern och lyssnar efter porten
app.listen(port, ()=> {
    console.log("Server is running on port: " + port);
});