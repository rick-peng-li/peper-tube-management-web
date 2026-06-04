const express = require("express");

const router = express.Router();

const {
  createOrder,
  getOrders,
  deleteOrder,
  updateOrderStatus,
} = require("../controllers/orderController");

const { protect } = require("../middleware/authMiddleware");


// Protected Routes
router.post("/", protect, createOrder);

router.get("/", protect, getOrders);

router.delete("/:id", protect, deleteOrder);

router.put("/:id", protect, updateOrderStatus);

module.exports = router;