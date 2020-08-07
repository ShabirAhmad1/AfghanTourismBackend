"use strict";
var mongoose = require("mongoose");

var ReviewSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Types.ObjectId },
    name: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9 ]+$/, "is invalid"],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
    },
    rating: { type: Number },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Review", ReviewSchema);
