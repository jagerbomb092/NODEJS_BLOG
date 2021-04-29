const mongoose = require('mongoose');
const Schema = mongoose.Schema
const MovieDetail = new Schema({
    title: {type : String, maxLength : 255},
    description: {type : String, maxLength : 655},
    image: {type : String, maxLength : 255},
    createdAt : {type : Date, default : Date.now},
    updatedAt : {type : Date, default : Date.now}
  });
module.exports = mongoose.model('movies', MovieDetail)