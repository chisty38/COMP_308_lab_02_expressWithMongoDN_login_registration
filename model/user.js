//require modules for our user

let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      default: "",
      trim: true,
      required: "first name is required"
    },
    lastname: {
      type: String,
      default: "",
      trim: true,
      required: "last name is required"
    },
    username: {
      type: String,
      default: "",
      trim: true,
      required: "user name is required"
    },
    email: {
      type: String,
      default: "",
      trim: true,
      required: "email is required"
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "Display name is required"
    },
    created: {
      type: Date,
      default: Date.now
    },
    updated: {
      type: Date,
      default: Date.now
    }, 
    feedback:
    {
      type: String,
      default: "",
      trim: true
    }
    /* taken out bcz password will encrypted by passport-local-mongoose
    password: {
        type: String,
        default: '',
        trim: true,
        required: 'user name is required'
    }
*/
  },
  {
    collection: "users"
  }
);

// configure options for the user schema

let options = ({
    missingPasswordError: "Wrong / Missing Password"
});

userSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model("User", userSchema);

