const mongoose = require("mongoose")
const Schema = mongoose.Schema

const stateSchema = new Schema({

    stateName:{
        type:String
    },
    details:{
        type:String
    }
})
module.exports = mongoose.model("StateDetails",stateSchema)