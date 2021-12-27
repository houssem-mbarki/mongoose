let Persons = require('./models/Person')
const food='Cheese'
Persons.findOne({favouriteFoods: food}, function(err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Result : ", docs);
    }
});

