const UserModel = require("../models/usermodel");

const create = async (req, res) => {
  try {
    const data = req.body;

    const newUser = await UserModel.create(data);

    res.status(201).json({
      message: "Product created successfully",
      data: newUser
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
    const viewUser = await UserModel.find({});
    res.status(200).json({
      message: "Products viewed successfully",
      data: viewUser
    });
  } catch (error) {
    res.status(500).json({
      message: "Error viewing products",
      errmsg: error.message
    });
  }
};

module.exports = { create, view };
