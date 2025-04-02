const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
    User:{
       type:mongoose.Schema.ObjectId,
       ref:"User",
    //    required: true
    },
    Product:{
        type:mongoose.Schema.ObjectId,
        ref:"Product"
    }
})

const Cart = mongoose.model("Cart",CartSchema);

module.exports=Cart;