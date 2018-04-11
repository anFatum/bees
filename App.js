const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("./Libs/mongoose.lib");

const app = express();
const Routes = require("./Routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

Routes(app);
app.listen(process.env.PORT);

module.exports = app;   // instance  HashMap

//module.exports.super = abc - function