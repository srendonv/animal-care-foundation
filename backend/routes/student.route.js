const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const mailer = require("./../config/mailer/mailer")
let path = require("path");
let fs = require("fs");
let mailer_filepath = path.resolve(__dirname,"./../config/mailer/sent/data.json"); 

// Student Model
let studentSchema = require('../models/Student');

// CREATE Student
router.route('/create-student').post((req, res, next) => {
  studentSchema.create(req.body, (error, data_schema) => {   

    if (error) {
      return next(error)
    } else {    

      fs.readFile(mailer_filepath,(err , data_mailer) => {
        if(err){
          console.log(err);
        } else{  
          let response_mailer = JSON.parse(data_mailer);

          console.log("data_schema: " + data_schema);
          console.log("response_mailer: " + JSON.stringify(response_mailer)) 
          // res.json(data_schema);

          mailer.sendEmail(data_schema);

          res.status(200).json({
            "database": data_schema,
            "mailer": response_mailer
           })         

         }
        } )  

    }
  })
});

// READ Students
router.route('/').get((req, res, next) => {
  studentSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Student
router.route('/edit-student/:id').get((req, res, next) => {
  studentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Student
router.route('/update-student/:id').put((req, res, next) => {
  studentSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Student updated successfully !')
    }
  })
})

// Delete Student
router.route('/delete-student/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;