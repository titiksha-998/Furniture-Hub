var mongoose = require('mongoose');
var Schema =mongoose.Schema;
var ContactSchema = new Schema ({
name:String,
email:String,
number:Number,
course:String,
describe:String

});

module.exports = mongoose.model('Contact', ContactSchema);