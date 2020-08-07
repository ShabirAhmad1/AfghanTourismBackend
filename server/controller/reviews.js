const mongoose = require("mongoose");
const Review = require("../models/reviews");

exports.getReviews = (req, res) => {
  Review.find({}).sort({createdAt: 'desc'}).then(obj => {
    res.send(obj);
  });
};
exports.getRatings = (req, res) => {
  Review.find({}).then(obj => {
    let rating = 0;
    if(obj.length > 0){
        obj.forEach((v, i) => {
            rating = rating + v.rating;
          });
          rating = rating/obj.length
    }
    res.send({rating})
  }).catch(err=>{
      res.status(500).send("failed")
  });
};
exports.deleteReview = (req, res) => {
    Review.deleteOne({
        _id: req.params.id
    },(err)=function (err) {
        if(err){
            console.log(err)
            res.status(500).send({
                msg: "FAILED"
            })
        }
        res.send(true)
      })
};
exports.addReview = (req, res) => {
  if (req.body && req.body.name && req.body.email && req.body.rating) {
    const Data = new Review({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      rating: req.body.rating
    });
    Data.save()
      .then(obj => {
        console.log(obj);
        res.status(200).send({
          message: "success"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          message: "You must have rated before or providing invalid arguments"
        });
      });
  }
};
