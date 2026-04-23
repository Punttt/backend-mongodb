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
        required: [true, "You must fill in companyname"]
    },
    jobtitle: {
        type: String,
        required: [true, "You must fill in jobtitle"]
    },
    location: {
        type: String,
        required: [true, "You must fill in location"]
    },
    startdate: {
        type: Date,
        required: [true, "You must fill in startdate"]
    },
    enddate: {
        type: Date,
        required: false
    },
    description: {
        type: String,
        required: [true, "You must fill in description"]
    },
});

// Modell utifrån scheman
const WorkExperience = mongoose.model("WorkExperience", WorkExperienceSchema);

// Routes
app.get("/api/workexperience", async (req, res) => {
    try {
        const result = await WorkExperience.find({});
        res.json(result);
    } catch (error) {
        res.status(500).json({error: "Kunde inte hämta data" });
    }
});

app.post("/api/workexperience", async (req, res) => {
    try {
        const result = await WorkExperience.create(req.body);
        res.json({ message: "Work experience added", id: result._id});
    } catch (error) {
        res.status(400).json({ error: "Alla fält måste fyllas in" });
    }
});

app.delete("/api/workexperience/:id", async (req, res) => {
    try{
        const result = await WorkExperience.findByIdAndDelete(req.params.id);
        res.json({ message: "Work experience deleted" });
    } catch (error) {
        res.status(500).json({ error: "Kunde inte radera posten" });
    }
});

// Startar servern och lyssnar efter porten
app.listen(port, ()=> {
    console.log("Server is running on port: " + port);
});