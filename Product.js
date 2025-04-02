const express = require("express");
const mongoose = require("mongoose");
const ProductRoute = require("./Routes/ProductRoute");

const app = express();
const port = 5000;

app.use(express.json()); 

// Routing
app.use("/product", ProductRoute); 

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
