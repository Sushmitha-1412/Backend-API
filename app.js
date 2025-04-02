const express = require("express");
const mongoose = require("mongoose");
const productCollection = require("./models/productmodel");
const ProductRouter = require("./Routes/ProductRoute");


const app = express();
const port = 3000;

//routing
app.use("/product", ProductRouter); 



// Middleware to parse JSON
app.use(express.json()); 

// MongoDB Connection
mongoose.connect("mongodb+srv://sushmitharsushmitha:sushmitha2002@sushmi.rlhm2.mongodb.net/?retryWrites=true&w=majority&appName=sushmi")
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log("DB connection error:", err.message);
  });



//  POST Route
app.post("/api/create", async (req, res) => {
  try {
    const data = req.body;

    // Create Product in DB
    const newProduct = await productCollection.create(data);

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
});



//view products
app.get("/api/view",async function (req,res) {
    try{
        const result = await productCollection.find({});

        res.status(201).json({
            message:"Products viewed sucessfully",
            result
        })
    }
    catch (error) {
        res.status(500).json({
          message: "Error creating product",
          errmsg: error.message
        });
      }
    
})



//ViewProductBy Id
app.get("/api/view/:id",async function (req,res) {
    try{
        const id = req.params.id;
        const result = await productCollection.findById(id);

        res.status(201).json({
            message:"Products viewedById sucessfully",
            result
        })
    }
    catch (error) {
        res.status(500).json({
          message: "Error creating product",
          errmsg: error.message
        });
      }
    
})


//Update product
app.put("/api/update/:id",async function (req,res) {
    try{
        const id = req.params.id;
        const data=req.body;
        const result = await productCollection.findByIdAndUpdate(id,data);

        const newData = await productCollection.findById(id);

        res.status(201).json({
            message:"Products Updated sucessfully",
            newData
        })
    }
    catch (error) {
        res.status(500).json({
          message: "Error creating product",
          errmsg: error.message
        });
      }
    
})






app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
