const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
  path: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Picture", pictureSchema);
