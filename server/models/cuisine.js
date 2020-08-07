"use strict";
var mongoose = require("mongoose");

var CuisineSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Types.ObjectId },
    title: { type: String, required: [true, "can't be blank"] },
    description: { type: String, required: [true, "can't be blank"] },
    images: [
      {
        link: { type: String },
        showFront: { type: Boolean, default: false },
      },
    ],
    ingredients: [
      {
        name: { type: String },
        quantity: { type: String },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Cuisine", CuisineSchema);
