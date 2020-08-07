const mongoose = require("mongoose");
const BookHotel = require("../models/bookHotel");

exports.bookHotel = (req, res) => {
  let post = new BookHotel({
    _id: new mongoose.Types.ObjectId(),
    Adults: req.body.Adults,
    Children: req.body.Children,
    bookingDate: {
      from: req.body.Datefrom,
      until: req.body.Dateuntil,
    },
    phoneNumber: req.body.phoneNumber,
    hotelId: req.body.hotelId,
    userId: req.userData._id,
  });
  post
    .save()
    .then((obj) => {
      res.json(obj);
    })
    .catch((err) => console.log(err));
};
exports.getBookings = (req, res) => {
  BookHotel.find(
    req.userData.authorization == "admin" ||
      req.userData.authorization == "junioradmin"
      ? undefined
      : {
          userId: req.userData._id,
        }
  )
    .populate(["hotelId", "userId"])
    .sort({ createdAt: "desc" })
    .then((obj) => {
      res.json(obj);
    })
    .catch((err) => console.log(err));
};

exports.updateStatus = (req, res) => {
  BookHotel.findOneAndUpdate(
    {
      _id: req.body.id,
    },
    {
      Status: req.body.Status,
    }
  )
    .then((obj) => {
      res.json(obj);
    })
    .catch((err) => console.log(err));
};
