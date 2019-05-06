var db = require("../config");
var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
  response.render('gate/register.njk');
});

module.exports = router;
