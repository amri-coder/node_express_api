const express = require("express");
const bodyParser = require("body-parser");

const promosRoutes = require("./promos.routes");
const router = express.Router();

router.use(bodyParser.json());

router.get("/", (request, response) => {
  response.json({ message: "Hello, World!" });
});

router.use("/promos", promosRoutes);

router.use("*", (req, res) => {
  res.status(404).json({
    error: true,
    message: "FUCK YOU DUMMY"
  });
});

module.exports = router;
