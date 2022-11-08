var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/v2", function (req, res, next) {
  res.render("index", { title: "Meu servidor Express" });
});

router.post("/", function (req, res) {
  res.send("Got a POST request");
});

module.exports = router;
