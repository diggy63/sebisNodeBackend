const mongoose = require("mongoose");

const galleryPhotoSchema = new mongoose.Schema(
  {
    purpose: { type: String, required: true },
    photoUrl: String,
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("GalleryPhoto", galleryPhotoSchema);
