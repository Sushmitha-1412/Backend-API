const CartModel = require("../models/cartmodel");

const create = async (req, res) => {
  try {
    const data = req.body;

    const newCart = await CartModel.create(data);

    res.status(201).json({
      message: "Product added to cart successfully",
      data: newCart
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding product to cart",
      errmsg: error.message
    });
  }
};

const view = async (req, res) => {
  try {

    const viewcart = await CartModel.find({}).populate('user',"name email").populate('product');
    res.status(200).json({
      message: "Cart viewed successfully",
      data: viewcart
    });
  } catch (error) {
    res.status(500).json({
      message: "Error viewing cart",
      errmsg: error.message
    });
  }
};

module.exports = { create, view };
