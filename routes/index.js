var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  request.get("https://reqres.in/api/users", (err, response, body) => {
    if (err) {
        return next(err);
    }
    console.log(JSON.parse(body));
    data = JSON.parse(body).data;
    // res.send(data);
    res.render('index', { data: data });
});

});

module.exports = router;
