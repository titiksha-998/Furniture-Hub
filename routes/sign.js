var express = require('express');
var router = express.Router();
var login= require("../models/signin");

/* GET home page. */
router.get('/sign', function(req, res, next) {
  res.render('sign');

});


router.post('/addcontact', function(req, res ,next){
  //var input = JSON.parse(JSON.stringify(req.body));
  console.log(req.body);
  //res.send(input);
  login.create(req.body,function(err,post){
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
 
  login.find(function(err,post){
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

  login.findByIdAndUpdate(req.params.id,req.body,function(err,post){
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

  login.findByIdAndRemove(req.params.id,req.body,function(err,post){
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
 
  login.findById(req.params.id,function(err,post){
if(err){
	console.log(err);
}
else{
	res.send(post);
	console.log(post);

}
});
});

module.exports = router;
