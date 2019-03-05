let mongoose = require('mongoose');

// create a model class

let contactSchema = mongoose.Schema({
     firstName: String,
     lastName: String,
     username: String,
     //password: String,
     emaill: String,
     displayName: String, 
     feedback: String
},
{
   collection: "first"
});

module.exports = mongoose.model('contact', contactSchema);