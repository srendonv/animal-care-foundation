let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// CUSTOMER MODEL
let customerSchema = require('../models/Customer');

// CREATE CUSTOMER
router.route('/customer-create').post((req, res, next) => {
  customerSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ CUSTOMER
router.route('/custome-get-find').get((req, res) => {
  customerSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// GET SINGLE CUSTOMER
router.route('/customer-get-id/:id').get((req, res) => {
  customerSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// UPDATE SINGLE CUSTOMER
router.route('/customer-update/:id').put((req, res, next) => {
  customerSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Customer updated successfully !')
    }
  })
})

// CUSTOMER DETELETE
router.route('/customer-delete/:id').delete((req, res, next) => {
    customerSchema.findByIdAndRemove(req.params.id, (error, data) => {
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