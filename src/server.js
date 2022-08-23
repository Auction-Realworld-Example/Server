const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const { startJob } = require("./services/cron");
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
startJob();
app.listen(80);
