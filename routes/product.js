var express = require('express');
var router = express.Router();
var product = require('../models/product');
/* GET home page. */
router.get('/product', function (req, res, next) {
    res.render('product');

});



router.post('/addcontact', function (req, res, next) {
    //var input = JSON.parse(JSON.stringify(req.body));
    console.log(req.body);
    //res.send(input);
    product.create(req.body, function (err, post) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(post);
            console.log(post);

        }
    });
});

router.get('/lists', function (req, res, next) {

    product.find(function (err, post) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(post);
            console.log(post);

        }
    });
});



router.put('/update/:id', function (req, res) {
    console.log(req.body);
    res.send(req.body);

    product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(post);
            console.log(post);

        }


    });

});
router.get('/delete/:id', function (req, res) {
    console.log(req.body);
    res.send(req.body);

    product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(post);
            console.log(post);

        }


    });

});
module.exports = router;