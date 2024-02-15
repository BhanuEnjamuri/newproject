const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("<h1>login Page</h1>");
});

router.get("/register", (req, res) => {
  res.sendFile(__dirname + "/register.html");
});

module.exports = router;
