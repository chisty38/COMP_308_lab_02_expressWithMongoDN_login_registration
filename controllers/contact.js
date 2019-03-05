let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a ref to the db schema

let contactModel = require('../model/user');
let User = contactModel.User; //alias


module.exports.displayContactList = (req, res, next) => {
    User.find((err, contactList) => {
        console.log(err);
        if(err){
            return console.error(err);
        }
        else{
            console.log(contactList);

            
            res.render('contacts/index', {
                title: 'Contact Lists',
                contactList: contactList,
                displayName: req.user ? req.user.displayName : ""
            });
       
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('contacts/add',{
        title: 'Add new Contact',
        displayName: req.user ? req.user.displayName : ""
    });
}

module.exports.processAddPage = (req,res,next) =>{
    let newContact = contactModel({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "age": req.body.age
    });
    contactModel.create(newContact, (err, contactModel) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the contactlist
            res.redirect('/contact-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.user.username;
    User.findByUsername(id, (err, contactList) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else {
            console.log(id);
            // show the edit page
            res.render('contacts/edit', {
                title: ' Edit Contact',
                contact: contactList,
                displayName: req.user ? req.user.displayName : ""
            });
        }
    });
    
}

module.exports.processEditPage = (req,res,next) =>{
    let id = req.user.id;

    let updatedContact = User({
        "_id":id,
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "username": req.body.username,
        "email": req.body.email,
        "displayName": req.body.displayName,
        "feedback": req.body.feedback
    });
    User.updateOne({_id: id}, updatedContact, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the contactlist
            res.redirect('/thankyou');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    contactModel.remove({_id: id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else {
            // show the edit page
            res.redirect('/contact-list');
        }
    });
}