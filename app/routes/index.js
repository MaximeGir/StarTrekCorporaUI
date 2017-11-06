var express = require('express');
var router = express.Router();
var request = require('request');
var baseUrl = "http://startrekcorpora.com:5000/api/v1";

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/apiResult', function (req, res, next) {
    path = req.body.value;
    request.get(baseUrl + path, function (error, response, body) {
        console.log(body);
        res.send(body);
    });
});

module.exports = router;
