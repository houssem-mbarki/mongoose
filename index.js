const express= require("express")
const app = express()
const connectdb = require('./database')
//const createMany = require('./addManyContacts')
//const findContact = require('./findContact')
//const findOne= require('./findOneContact')
//const findById= require('./FindById')
//const newContact = require('./addContact')
//const update=require('./update')
//const updateOne=require('./updateOne')
//const Remove=require('./Remove')
const RemoveMany = require('./RemoveMany')
//connectdb();
//createMany();
// newContact();
app.listen(5000, ()=>{
    console.log('Server running on port 5000')
})