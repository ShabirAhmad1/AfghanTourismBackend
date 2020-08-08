var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var adminRouter = require("./server/routes/admin");
var userRouter = require("./server/routes/user");
var postsRouter = require("./server/routes/posts");
var reviewRouter = require("./server/routes/reviews");
var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// mongoose connection
const mongoose = require("mongoose");
const mongoUrl = require("./config/mongo.json").url;
console.log(mongoUrl);
mongoose.connect(mongoUrl, { useNewUrlParser: true });
mongoose.connection.on("connected", () => {
  console.log("connected successfully");
});
mongoose.connection.on("error", () => {
  console.log("connected successfully");
});
// end

// check for admin
const checkAdmin = require("./server/controller/admin");
checkAdmin.createFirst();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "./dist")));

app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/posts", postsRouter);
app.use("/api/reviews", reviewRouter);

//Exceedfile limit
// var bodyParser = require('body-parser');
// app.use(bodyParser.json({limit: "50mb"}));
// app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.send("failed");
});

module.exports = app;
