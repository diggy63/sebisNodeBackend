const express = require("express");
const router = express.Router();
const galleryCtrl = require("../../controllers/GalleryController");
const multer = require("multer");
const upload = multer();

router.post("/add", upload.single("photo"), galleryCtrl.addPhoto);

module.exports = router;
