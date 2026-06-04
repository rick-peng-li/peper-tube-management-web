const Order = require("../models/Order");


// CREATE ORDER
const createOrder = async (req, res) => {

  try {

    const {
      customer,
      product,
      quantity,
      status,
    } = req.body;

    const order = await Order.create({
      customer,
      product,
      quantity,
      status,
    });

    res.status(201).json(order);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};


// GET ALL ORDERS
const getOrders = async (req, res) => {

  try {

    const orders = await Order.find().sort({
      createdAt: -1,
    });

    res.status(200).json(orders);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE ORDER
const deleteOrder = async (req, res) => {

  try {

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    await order.deleteOne();

    res.status(200).json({
      message: "Order deleted successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE ORDER STATUS
const updateOrderStatus = async (req, res) => {

  try {

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    order.status = req.body.status;

    const updatedOrder = await order.save();

    res.status(200).json(updatedOrder);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getOrders,
  deleteOrder,
  updateOrderStatus,
};