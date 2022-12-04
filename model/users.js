const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: true,
    unique: true 
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  skillSets: [String],
  hobby: [String],
  enable: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", UsersSchema);