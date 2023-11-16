const express = require("express");
const router = express.Router();
const cateringCtrl = require("../../controllers/CateringController");

router.post("/create", cateringCtrl.createItem);
router.get("/getall", cateringCtrl.getAll);
router.delete("/delete/:id", cateringCtrl.deleteOne);
router.post("/update", cateringCtrl.updateOne);

module.exports = router;
