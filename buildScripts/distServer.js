/*
 * DISCLAIMER
 * THIS IS NOT FOR ACTUAL PRODUCTION USE.
 * THIS IS JUST USEFUL FOR HOSTING THE MINIFIED PRODUCTION FOR LOCAL DEBUGGING PURPOSES.
 */

import express from "express";
import path from "path";
import open from "open";
import compression from "compression";

const port = 3000;
const app = express();

app.use(compression()); // gzip compression
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
