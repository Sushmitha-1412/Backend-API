const express  = require("express");
const router = express.Router();

const CartController = require("../Controller/CartController");

router.post("/create",CartController.create);
router.get("/view",CartController.view);

module.exports = router;
