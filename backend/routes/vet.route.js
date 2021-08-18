let express = require('express');
let router = express.Router();

// Vet Model
let vetSchema = require('../models/Vet');

// CREATE Vet
router.route('/create-vet').post((req, res, next) => {
  vetSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Vets
router.route('/').get((req, res, next) => {
  vetSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Vet
router.route('/get-vet/:id').get((req, res, next) => {
  vetSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Vet
router.route('/update-vet/:id').put((req, res, next) => {
  vetSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Vet updated successfully !')      
    }
  })
})

// Delete Vet
router.route('/delete-vet/:id').delete((req, res, next) => {
  vetSchema.findByIdAndRemove(req.params.id, (error, data) => {
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