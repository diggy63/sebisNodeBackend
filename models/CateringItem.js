const mongoose = require("mongoose");

const cateringItemSchema = new mongoose.Schema(
  {
    category: String,
    name: String,
    description: String,
    price: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CateringItem", cateringItemSchema);
