let express = require('express'),
router = express.Router();


// date MODEL
let dateSchema = require('../models/Date');

// CREATE date
router.route('/date-create').post((req, res, next) => {
  dateSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
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