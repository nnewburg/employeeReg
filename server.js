"use strict";

require('dotenv').config();

const express = require("express");
const app = express();
const ENV         = process.env.ENV || "development";
const bodyParser = require("body-parser");
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const PORT = 3000;
var path = require('path');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'views')));


const employeeRoute = require("./routes/employeeRoute");

app.use("/api/employee", employeeRoute(knex));

app.get("/", (req, res) => {
  return res.render("index")
})

app.get("/employeeList", (req, res) => {
  return res.render("listOfEmployee")
})


app.post("/addEmployee", (req, res) => {
  knex("employees").insert({name: req.body.name, email: req.body.email, position: req.body.position, phone: req.body.phone, salary: req.body.salary, date_hired: req.body.date_hired}).then(result => {
    res.redirect("/")
  })
})



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

