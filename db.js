const mongoose = require("mongoose")

var mongoURL="mongodb+srv://sagor_just:sagor_just@cluster0.42bs8.mongodb.net/PizzaDB"

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlparser:true})
var db=mongoose.connection

db.on('connected',()=>{
    console.log('Mongo Db connection successfull')
})
db.on('error',()=>{
    console.log('Mongo Db connection failed')
})


module.exports=mongoose