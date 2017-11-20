var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  var obj = readJsonFile("public/json/program.json");
  res.render('index', obj);
});

function readJsonFile(file){
  var file = fs.readFileSync(file, "utf-8");
  return JSON.parse(file);
}

module.exports = router;
