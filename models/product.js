var mongoose = require('mongoose');
var Schema =mongoose.Schema;
var productSchema = new Schema ({
    prod_name: String,
    prod_desc: String,
    prod_price: Number,
    updated_at: Date

});



module.exports = mongoose.model('product', productSchema);