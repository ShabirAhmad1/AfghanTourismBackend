const express = require('express');
const router = express.Router();
const { validate } = require('../lib/validation/userValidator')
const auth = require('../lib/auth/adminAuth')
const userAuth = require('../lib/auth/userAuth')
const cuisine = require('../controller/cuisines')
const dress  = require('../controller/dress')
const view = require('../controller/view')
const image = require('../controller/ImageUpload')
const hotel = require('../controller/hotels')
const bookHotel = require('../controller/bookHotel')

// cuisine routes
router.get('/cuisines/:page?/:limit?', cuisine.getcuisines  );
router.get('/cuisine/:id', cuisine.getcuisine  );
router.post('/cuisine/',auth, cuisine.addcuisine  );
router.put('/cuisine/:id',auth, cuisine.updatecuisine  );
router.delete('/cuisine/:id',auth, cuisine.deletecuisine );

// dress routes
router.get('/dresses/:page?/:limit?', dress.getdresses  );
router.get('/dress/:id', dress.getdress  );
router.post('/dress/',auth, dress.adddress  );
router.put('/dress/:id',auth, dress.updatedress  );
router.delete('/dress/:id',auth, dress.deletedress );


// view routes
router.get('/views/:page?/:limit?', view.getviews );
router.get('/view/:id', view.getview );
router.post('/view/',auth, view.addView );
router.put('/view/:id',auth, view.updateView );
router.delete('/view/:id',auth, view.deleteView );

// hotel routes
router.get('/hotels/:page?/:limit?', hotel.getHotels );
router.get('/hotel/:id', hotel.getHotel );
router.post('/hotels/',auth, hotel.addHotel );
router.put('/hotels/:id',auth, hotel.updateHotel );
router.delete('/hotels/:id',auth, hotel.deleteHotel );


// Book hotel
router.post('/book/hotel',userAuth, bookHotel.bookHotel)
router.get('/book/hotel',userAuth, bookHotel.getBookings)
router.post('/book/hotel/update',auth, bookHotel.updateStatus)

//Uplad Image
router.post('/image',auth, image.Upload )



module.exports = router;
