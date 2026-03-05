const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({

    productName:{
        type:String
    },
    productPrice:{
        type:Number
    },
    productDescription:{
        type:String
    },
})
module.exports = mongoose.model("products",productSchema)