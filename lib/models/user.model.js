const mongoose = require('mongoose');
mongoose.set('runValidators', true);

const userSchema = new mongoose.Schema({
  isMember: { type: Boolean, default: false },
  firstname: { type: String },
  surname: { type: String },
  age: { type: Number },
  street: { type: String },
/*   address: {
    street: { type: String },
    postalCode: { type: Number },
    city: { type: String },
    country: { type: String },
  }, */
  zip: { type: Number },
  email: { type: String, required: true, unique: true },
  //! 
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('user', userSchema);
