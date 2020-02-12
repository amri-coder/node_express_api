const express = require("express");
const db = require("./db");
const router = require("./routes");

const PORT = 8080;

const app = express();

db.sync();

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
