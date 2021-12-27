
const Persons = require('./models/Person')
const personName = 'James Bond'
Persons.findOneAndUpdate({name:personName}, {$set:{age:27}}, {new : true}, function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }

    console.log(doc);
});