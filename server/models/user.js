"use strict";
var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var jwt = require("jsonwebtoken");

var UserSchema = new mongoose.Schema(
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
    password: {
      type: String,
      required: [true, "can't be blank"],
      select: false,
    },
    phoneNumber: { type: String },
    authorization: {
      type: String,
      enum: ["user", "admin", "junioradmin"],
      default: "user",
    },
  },
  { timestamps: true }
);

UserSchema.plugin(uniqueValidator, { message: "is already taken." });

UserSchema.methods.CreateToken = function () {
  console.log("++++++++++++++++++++++");
  console.log(this.authorization);
  var token = jwt.sign(
    { _id: this._id, email: this.email, authorization: this.authorization },
    "abc12385",
    {}
  );
  // expires in removed
  // expiresIn : '24h'
  let x = {
    token: token,
    User: {
      name: this.name,
      email: this.email,
    },
  };
  return x;
};

module.exports = mongoose.model("User", UserSchema);
