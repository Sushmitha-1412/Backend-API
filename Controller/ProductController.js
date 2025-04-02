const productModel = require("../models/productmodel");

const create = async (req, res) => {
  try {
    const data = req.body;

    const newProduct = await productModel.create(data);

    res.status(201).json({
      message: "Product created successfully",
      data: newProduct
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating product",
      errmsg: error.message
    });
  }
};

const view = async (req, res) => {
  try {
    const result = await productModel.find({});
    res.status(200).json({
      message: "Products viewed successfully",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      message: "Error viewing products",
      errmsg: error.message
    });
  }
};

module.exports = { create, view };
