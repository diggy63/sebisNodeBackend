const GalleryPhoto = require("../models/GalleryPhoto");
const { v4: uuidv4 } = require("uuid");
const { S3Client } = require("@aws-sdk/client-s3");
const s3 = new S3Client();

const AWSServices = require("../Utils/AWSServices");
const AWS = new AWSServices();

module.exports = {
  addPhoto,
};

async function addPhoto(req, res) {
  //   console.log(req.body, req.file);
  AWS.sayHello();
  const filePath = `${uuidv4()}/${req.file.originalname}`;
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: filePath,
    Body: req.file.buffer,
  };
  res.status(200).json({ test: "sucess" });
}
