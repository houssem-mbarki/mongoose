
let personModel = require('./models/Person')
let contact = new personModel({
  name: 'John Smith',
  age:23,
  favouriteFoods:['Pizza', 'Cheese']
})
contact.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })

   module.exports=contact

