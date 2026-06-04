const express = require("express");

const router = express.Router();

const {

  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,

} = require("../controllers/productController");


// ADD PRODUCT
router.post("/", addProduct);


// GET PRODUCTS
router.get("/", getProducts);


// DELETE PRODUCT
router.delete("/:id", deleteProduct);


// UPDATE PRODUCT
router.put("/:id", updateProduct);


module.exports = router;