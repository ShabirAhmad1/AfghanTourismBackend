"use strict";
var mongoose = require("mongoose");

var BookHotelSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Types.ObjectId },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
    Adults: {
      type: Number,
    },
    Children: {
      type: Number,
    },
    phoneNumber: {
      type: String,
    },
    Status: {
      type: String,
      enum: ["Approved", "Denied", "Pending"],
      default: "Pending",
    },
    bookingDate: {
      from: {
        year: {
          type: Number,
        },
        month: {
          type: Number,
        },
        day: {
          type: Number,
        },
      },
      until: {
        year: {
          type: Number,
        },
        month: {
          type: Number,
        },
        day: {
          type: Number,
        },
      },
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("BookHotel", BookHotelSchema);
