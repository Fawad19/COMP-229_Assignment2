/*Name: Fawad Mohammed Zaheer
Student Id: 301230271
Course: COMP_229(Web Application Development)
Instructor: Malek Zakeyabanu
Assignment: Assignment-2(Authentication)
*/ 

let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let User = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "Username is required!",
    },

    /* password: {
      type: String,
      default: "",
      trim: true,
      required: "password is required",
    },*/

    email: {
      type: String,
      default: "",
      trim: true,
      required: "Email address is required!",
    },

    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "Display Name is required!",
    },

    created: {
      type: Date,
      default: Date.now,
    },

    update: {
      type: Date,
      default: Date.now,
    },
    
  },
  {
    collection: "users",
  }
);

// configure options for User Model

let options = { missingPasswordError: "Wrong / Missing Password" };

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model("User", User);

