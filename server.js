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

// Scheman


// Modell utifrån scheman


// Routes


// Startar servern och lyssnar efter porten
app.listen(port, ()=> {
    console.log("Server is running on port: " + port);
});