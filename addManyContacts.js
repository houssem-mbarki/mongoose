let Persons = require('./models/Person')

const arrayOfPeople = [{ name : 'James Bond', age : 29, favouriteFoods : ['Beagles'] },
{ name : 'Harry Potter', age : 31, favouriteFoods : ['Cookies', 'Honey']}];
Persons.create(arrayOfPeople, err => {
    if (err) 
        throw err
    console.log('Many persons added')
})

// const create=(arrayOfPeople)=>{
// arrayOfPeople = [{ name : 'Bob Dealan', age : 29, favouriteFoods : ['Beagles'] },
// { name : 'Tony Parker', age : 31, favouriteFoods : ['Cookies', 'Honey']}];
// arrayOfPeople.forEach(elt=>{
//     let PersonModel = require('./models/Person')
//     var msg = new PersonModel(elt)
//     msg.save()
    
// })
// }
// module.exports=create


