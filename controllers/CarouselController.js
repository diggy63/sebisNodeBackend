const CarouselPhoto = require("../models/CarouselPhoto");
const AWSServices = require("../Utils/AWSServices");
const AWS = new AWSServices();

async function addPhoto(req, res) {
  const photoUrl = await AWS.uploadPhoto(req.file);
  const new_photo = new CarouselPhoto({
    order: req.body.order,
    label: req.body.label,
    comment: req.body.comment,
    photoUrl: photoUrl,
  });
  new_photo.save();
  res.status(201).json({ photo: "created" });
}

async function getAll(req, res) {
  const all_photos = await CarouselPhoto.find({});
  res.status(200).json(all_photos);
}

module.exports = {
  addPhoto,
  getAll,
};
