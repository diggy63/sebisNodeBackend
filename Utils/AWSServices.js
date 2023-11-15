const { v4: uuidv4 } = require("uuid");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const s3Client = new S3Client({
  region: "us-west-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

class AWSServices {
  constructor() {}
  async uploadPhoto(photo) {
    const filePath = `${uuidv4()}/${photo.originalname}`;
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: filePath,
      Body: photo.buffer,
    };
    try {
      const data = await s3Client.send(new PutObjectCommand(params));
      const imageURL = `https://s3-us-west-1.amazonaws.com/${process.env.BUCKET_NAME}/${filePath}`;
      return imageURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      return error;
    }
  }
}

module.exports = AWSServices;
