const mongoose = require("mongoose");

const carouselPhotoSchema = new mongoose.Schema(
  {
    order: Number,
    label: String,
    comment: String,
    photoUrl: String,
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("CarouselPhoto", carouselPhotoSchema);
