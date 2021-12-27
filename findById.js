const Persons=require('./models/Person')

const id="61afd45a36fe518516cb4482"
Persons.findById(id, function(err, doc){
    if (err) console.log(err)
console.log('Result : ', doc)
})