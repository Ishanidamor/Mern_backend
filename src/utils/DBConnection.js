const mongoose = require('mongoose')

const DBConnection = ()=>{

    mongoose.connect("mongodb://127.0.0.1:27017/learning_26").then(()=>{
        console.log("db connected")
    }).catch((err)=>{
        console.log("database not connted..",err)
    })

}

module.exports = DBConnection