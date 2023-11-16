const { $Command } = require("@aws-sdk/client-s3");
const CateringItem = require("../models/CateringItem");

async function createItem(req, res) {
  console.log("here creating");
  const newItem = new CateringItem(req.body);
  newItem.save();
  res.status(201).json({ photo: "created" });
}

async function getAll(req, res) {
  const allItems = await CateringItem.find({});
  res.status(200).json(allItems);
}

async function deleteOne(req, res) {
  await CateringItem.deleteOne({ _id: req.params.id })
    .then(function () {
      console.log("deleted");
      res.status(202).json({ item: "deleted" });
    })
    .catch(function (error) {
      res.status(404).json(error);
    });
}

async function updateOne(req, res) {
  console.log(req.body);
}
module.exports = {
  createItem,
  getAll,
  deleteOne,
  updateOne,
};
