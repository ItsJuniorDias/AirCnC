const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
   thumbnail : String,
   company: String,
   price: Number,
   techs: [String],
   user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
   }
});

module.exports = mongoose.model('Spot', UserSchema);