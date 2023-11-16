const express = require("express");
const router = express.Router();
const carouselCtrl = require("../../controllers/CarouselController");
const multer = require("multer");
const upload = multer();

router.post("/add", upload.single("photo"), carouselCtrl.addPhoto);
router.get("/getall", carouselCtrl.getAll);

module.exports = router;
