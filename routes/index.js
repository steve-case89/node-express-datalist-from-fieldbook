'use strict';

var express = require('express');
var router = express.Router();

/* Fieldbook -- sample *//*
var Fieldbook = require('node-fieldbook');
var book = new Fieldbook({
    username: 'key-1',
    password: 'cT0nK9wGqGCnVXMa0YYT',
    book: '56e2e6c95d27c403000d75ff'
});

var filter = {
    name: 'sample-book1',
    limit: 1
};

book.getSheet('contacts', filter)
    .then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});*/

var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

    var options = {
        url: 'https://api.fieldbook.com/v1/56e2e6c95d27c403000d75ff/sample_sheet1',
        headers: {
            'Accept': 'application/json'
        },
        auth: {
            username: 'key-1',
            password: 'cT0nK9wGqGCnVXMa0YYT'
        }
    };

    request(options, function (error, response, body) {
        if (error) {
            console.log('error', error);
            res.render('error');
        } else {
            console.log(body.length + 'items');
            res.render('index', { title: 'Express', data: (JSON.parse(response.body))});
        }
    });
});

module.exports = router;
