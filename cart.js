const express = require("express");
const mongoose = require("mongoose");
const CartRoute = require("./Routes/CartRoute");

const app = express();
const port = 8000;

// Middleware to parse JSON
app.use(express.json());

// Routing
app.use("/cart", CartRoute);  

// MongoDB Connection
mongoose.connect("mongodb+srv://sushmitharsushmitha:sushmitha2002@sushmi.rlhm2.mongodb.net/?retryWrites=true&w=majority&appName=sushmi")
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log("DB connection error:", err.message);
  });


  
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
