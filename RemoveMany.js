

const Persons = require('./models/Person')

const personName='Tony Parker'
Persons.deleteMany({name:personName})
.then((docs)=>console.log(docs.deletedCount, ' persons removed'))
.catch((err)=>console.error(err))

