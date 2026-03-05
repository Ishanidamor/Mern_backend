const mongoose = require("mongoose")
const Schema = mongoose.Schema

const citySchema = new Schema({

    CityName:{
        type:String
    },
    State:{
        type:String
    },
    pincode:{
        type:Number
    }
})
module.exports = mongoose.model("CityDetails",citySchema)