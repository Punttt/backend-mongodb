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