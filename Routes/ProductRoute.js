const express = require("express");
const router = express.Router();
const ProductController = require("../Controller/ProductController");

router.post("/create", ProductController.create);
router.get("/view", ProductController.view);

module.exports = router;
