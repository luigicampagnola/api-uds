const express = require("express");
const app = express();
const listRouter = require("../routes/list.router");

app.use(express.json()) //convert every request to a js object

app.use("/list", listRouter);


module.exports = app;
