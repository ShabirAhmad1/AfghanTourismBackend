var express = require('express');
var router = express.Router();
var reviews = require('./../controller/reviews')
const superAuth = require('./../lib/auth/superAdminAuth')

router.get('/', reviews.getReviews  );
router.get('/rating', reviews.getRatings  );
router.delete('/:id',superAuth, reviews.deleteReview)
router.post('/',reviews.addReview);

module.exports = router;