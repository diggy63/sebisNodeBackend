const GalleryPhoto = require("../models/GalleryPhoto");
const AWSServices = require("../Utils/AWSServices");
const AWS = new AWSServices();

module.exports = {
  addPhoto,
  getAll,
};

async function addPhoto(req, res) {
  const photoUrl = await AWS.uploadPhoto(req.file);
  const new_photo = new GalleryPhoto({
    purpose: req.body.purpose,
    photoUrl: photoUrl,
  });
  new_photo.save();
  res.status(201).json({ photo: "created" });
}

async function getAll(req, res) {
  const all_photos = await GalleryPhoto.find({});
  res.status(200).json(all_photos);
}
