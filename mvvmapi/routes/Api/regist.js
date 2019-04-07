var Saver = require("../../Logic/save.js");
var express = require('express');
var router = express.Router();

router.get('/name/:name/recordClassList/:recordClassList/body/:body', function(req, res, next) {
  var name = req.params.name;
  var recordClassList = req.params.recordClassList;
  var body = req.params.body;
  var result = Saver.Save(name, recordClassList, body);
  res.send(result);
});

module.exports = router;
