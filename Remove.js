
const Person = require('./models/Person')
const Persons=require('./models/Person')
const personId="61afd45a36fe518516cb4482"
Person.findByIdAndRemove(personId, function(err, doc){
    if(err) 
        {console.log('Some thing is wrong')}
    else
        console.log('Document removed', doc)

})