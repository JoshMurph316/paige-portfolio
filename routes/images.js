var express = require('express');
var router = express.Router();

var Image = require('../models/image');

router.post('/', function (req, res, next){
    var image = new Image({
        url: req.body.url,
        user: req.body.user
    });
    image.save(function(err, result) {
        if(err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved Image',
            obj: result
        });
    });
});

module.exports = router;