/*Name: Fawad Mohammed Zaheer
Student Id: 301230271
Course: COMP_229(Web Application Development)
Instructor: Malek Zakeyabanu
Assignment: Assignment-2(Authentication)
*/ 

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
