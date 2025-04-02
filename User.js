const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./Routes/UserRoute");

const app = express();
const port = 6000;

// Middleware to parse JSON
app.use(express.json()); 

// Routing
app.use("/user", userRoute); 

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
