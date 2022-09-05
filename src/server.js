const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { startJob } = require("./services/cron");

const app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
startJob();
app.listen(80);
