let mongoose = require('mongoose')
let personSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
        },
    age : Number,
    favouriteFoods : {
        type : [String], 
        default : []
        }
        
    })

module.exports = mongoose.model('Contact', personSchema)

// const mongoose = require("mongoose")
// const schema = mongoose.schema
// const personSchema = new schema ({
//     name : {
//         type : String,
//         required : true
//     },
//     age : Number,
//     favouriteFoods : {
//         type : [String], 
//         default : []
//     }

// })

// module.exports = Contact = mongoose.model("contact", personSchema);