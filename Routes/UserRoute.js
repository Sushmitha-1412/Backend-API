
const express = require("express");
const router = express.Router();

const UserController = require("../Controller/UserController"); 

router.post("/create", UserController.create); 
router.get("/view", UserController.view); 

module.exports = router;

