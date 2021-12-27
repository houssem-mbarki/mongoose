
let Persons = require('./models/Person')
let search = 'James Bond'

Persons.find({ name : search }, function (err, docs) {
    if (err) 
        console.error(err)
    console.log(docs)
     
  });
