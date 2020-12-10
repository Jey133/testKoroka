var express = require('express');
var request = require('request');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {

  request.get("https://reqres.in/api/users?page=1", (err, response, body) => {
    if (err) {
        return next(err);
    }
    console.log(JSON.parse(body));
    data = JSON.parse(body).data;
    res.render('index', { data: data });
  });
});

module.exports = router;