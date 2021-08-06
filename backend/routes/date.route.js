let express = require('express'),
router = express.Router();
const mailer = require("./../config/mailer/mailer")
let path = require("path");
let fs = require("fs");
let mailer_filepath = path.resolve(__dirname,"./../config/mailer/sent/data.json"); 


// date MODEL
let dateSchema = require('../models/Date');

// CREATE date
router.route('/date-create').post((req, res, next) => {
  dateSchema.create(req.body, (error, data_schema) => {
    if (error) {
      return next(error)
    } else {
      // console.log(data)
      // res.json(data)

     mailer.sendEmail(data_schema, ()=>{
        fs.readFile(mailer_filepath,(err , data_mailer) => {
          if(err){
            console.log(err);
          } else{  
            let response_mailer = JSON.parse(data_mailer);

            console.log("data_schema: " + data_schema);
            console.log("response_mailer: " + JSON.stringify(response_mailer)) 
            // res.json(data_schema);          

            res.status(200).json({
              "database": data_schema,
              "mailer": response_mailer
            })         

          }
          } )           

    })
  }})
});

// READ date
router.route('/date-get-find').get((req, res) => {
  dateSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// GET SINGLE date
router.route('/date-get-id/:id').get((req, res) => {
  dateSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// UPDATE SINGLE date
router.route('/date-update/:id').put((req, res, next) => {
  dateSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('date updated successfully !')
    }
  })
})

// date DETELETE
router.route('/date-delete/:id').delete((req, res, next) => {
    dateSchema.findByIdAndRemove(req.params.id, (error, data) => {
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