const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.port || 5000;

const app = express();

//Routes
app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT);
