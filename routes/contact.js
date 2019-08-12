var express = require('express');
var router = express.Router();
var Contact = require('../models/contact');
/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');

});



router.post('/addcontact', function(req, res ,next){
  //var input = JSON.parse(JSON.stringify(req.body));
  console.log(req.body);
  //res.send(input);
  Contact.create(req.body,function(err,post){
if(err){
	console.log(err);
}
else{
	res.send(post);
	console.log(post);

}
});
});

router.get('/lists', function(req, res ,next){
 
  Contact.find(function(err,post){
if(err){
	console.log(err);
}
else{
	res.send(post);
	console.log(post);

}
});
});



router.put('/update/:id', function(req,res){
console.log(req.body);
res.send(req.body);

  Contact.findByIdAndUpdate(req.params.id,req.body,function(err,post){
if(err){
	console.log(err);
}
else{
	res.send(post);
	console.log(post);

}


});

});
router.get('/delete/:id', function(req,res){
console.log(req.body);
res.send(req.body);

  Contact.findByIdAndRemove(req.params.id,req.body,function(err,post){
if(err){
	console.log(err);
}
else{
	res.send(post);
	console.log(post);

}


});

});

router.get('/fetch/:id', function(req, res ,next){
 
  Contact.findById(req.params.id,function(err,post){
if(err){
	console.log(err);
}
else{
	res.send(post);
	

}
});
});


router.get('/fetchdata/:id' , function(req, res) {
    Contact.findById(req.params.id, function (err, post) {
        if (err) {
            console.log(err);
        }
        else {
            res.render('editcontact', { data: post });


        }
    });
});

router.get('/table', function (req, res, next) {

    Contact.find(function (err, post) {
        if (err) {
            console.log(err);
        }
        else {
            //res.send(post);
            res.render('table', { data: post });
            console.log(post);


        }
    });
});

router.get('/deletedata/:id', function (req, res) {
    Contact.findByIdAndRemove(req.params.id, function (err, post) {
        if (err) {
            console.log(err);
        }
        else {
            //res.send(post);
            res.redirect('/contact');
            console.log(post);


        }
    });
});

router.get('/addc', function (req, res) {

    res.render('contact');
});

router.post('/editdata', function (req, res) {
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
        name : input.name,
        email : input.email,
        number : input.number,
        course : input.course,
        describe : input.describe
    }
    Contact.findByIdAndUpdate(input.id, data, function (err, post) {
        if (err) {
            console.log(err);
        }
        else {
            //res.send(post);
            res.redirect('/contact/table');
            


        }

    });
});

module.exports = router;
