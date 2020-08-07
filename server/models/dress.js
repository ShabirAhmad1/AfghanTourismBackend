"use strict";
var mongoose = require("mongoose");

var DressSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Types.ObjectId },
    title: { type: String },
    description: { type: String },
    images: [
      { link: { type: String }, showFront: { type: Boolean, default: false } },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Dress", DressSchema);
