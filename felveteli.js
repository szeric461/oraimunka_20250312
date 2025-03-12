const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    port: 3307,
    password: "",
    database: "felveteli"
})

app.get ("/", (req,res) => {
    res.send("Működik a szerver");
})



app.listen(3000, () => {
 
    console.log("A felvételi szervere a 3000-es porton fut.");
 
});