const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  signedUp: { type: String, required: true, default: Date.now },
  password: { type: String, required: true }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
