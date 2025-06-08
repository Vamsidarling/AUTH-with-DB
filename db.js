const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
const User = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  fname: String,
  lname: String,
  //   Question: String,
  userId: ObjectId,
});
const History = new Schema({
  userId: { type: ObjectId, ref: "User" },
  quesion: String,
  Response: String,
  creatAt: { type: Date, default: Date.now },
});
const UserModel = mongoose.model("User", User, "User");
const HistoryModel = mongoose.model("History", History, "History");
module.exports = {
  UserModel: UserModel,
  HistoryModel: HistoryModel,
};
