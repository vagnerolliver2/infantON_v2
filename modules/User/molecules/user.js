const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Molecule = {
  email: require('./../atoms/email')
, password: require('./../atoms/password')
, type: require('./../atoms/type')
}
 
module.exports = new Schema(Molecule);



