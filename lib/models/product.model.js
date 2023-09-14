const mongoose = require('mongoose');

mongoose.set('runValidators', true);

const productSchema = new mongoose.Schema({

    id : { type: String, required: true, unique: true },
    title : { type: String, required: true, unique: true },
    category : { type: String, required: true },
    price : { type: Number, required: true },
    recommended : { type: Boolean, default: false },
    discountInPercent : { type: Number, default: 0, max: 100 }
});

module.exports = mongoose.model('product', productSchema);

