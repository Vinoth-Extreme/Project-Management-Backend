const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const { initializeDB } = require("./utils/DB")



// ****************************************
// ****************************************

initializeDB();



// ****************************************
// ****************************************




app.listen(PORT, (err) => {
    if(err) throw err;

    console.log(`Server is running at ${5000}`);
})