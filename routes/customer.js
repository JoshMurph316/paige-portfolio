var express = require('express');
var router = express.Router();

var Customer = require('../models/customer');

router.post('/', function (req, res, next){
    var customer = new Customer({
        name: req.body.name,
        email: req.body.email
    });
    image.save(function(err, result) {
        if(err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved Customer',
            obj: result
        });
    });
});

module.exports = router;