"use strict";

require('dotenv').config();

const express = require("express");
const app = express();
const ENV         = process.env.ENV || "development";
const bodyParser = require("body-parser");
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const PORT = 8080;
const bcrypt = require('bcrypt');
var path = require('path');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));


app.get("/", (req, res) => {
  return res.render("index")
})

app.post("/addEmployee", (req, res) => {
  knex("employees").insert({name: req.body.name, email: req.body.email, position: req.body.position, phone: req.body.phone, salary: req.body.salary, date_hired: req.body.date_hired}).then(result => {
    res.redirect("/")
  })
})



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

