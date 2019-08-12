var mongoose = require('mongoose');
var Schema =mongoose.Schema;
var loginSchema = new Schema ({
firstname:String,
lastname:String,
username:String,
state:String,
city:String,
zip:Number


});

module.exports = mongoose.model('login', loginSchema);