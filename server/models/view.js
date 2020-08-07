"use strict";
var mongoose = require("mongoose");

var ViewSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Types.ObjectId },
    title: { type: String },
    description: { type: String },
    images: [
      { link: { type: String }, showFront: { type: Boolean, default: false } },
    ],
    location: {
      lon: { type: String },
      lat: { type: String },
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("View", ViewSchema);
