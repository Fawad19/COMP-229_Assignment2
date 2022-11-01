/*Name: Fawad Mohammed Zaheer
Student Id: 301230271
Course: COMP_229(Web Application Development)
Instructor: Malek Zakeyabanu
Assignment: Assignment-2(Authentication)
*/ 

let mongoose = require('mongoose');
//create a model class

let booksModel = mongoose.Schema({
    name: String,
    number: Number,
    emailaddress: String
},
{//mongoDB collection name
    collection: "book"
});

module.exports = mongoose.model('Book', booksModel)