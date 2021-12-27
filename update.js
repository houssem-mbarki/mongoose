const Persons = require('./models/Person')
const food='Hamburger';
Persons.findOneAndUpdate(
    {
      id:  "61afd45a36fe518516cb4482"
    }, 
    {
        $push : {favouriteFoods : food}   
    },
    {
      new: true,                       
      runValidators: true             
    })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })