const db = require('.db-config.js');



db('users');   //this will get all users...its same as saying=  db.select('*').from('users')
//resolves to an array of users  

db('users').where({id:3}); // this will get a user based on the ID
//resolves to an array containing any users that match the where

db('users').insert({name:'jose', age:32}); // This will insert a new user and automatically create a new ID for this new created user
//resolve to an array containing the id of the new user

db('users').where({id:5}).update({age: 32});  //this will update and user age based on the id provided
//resolve to the count of records updated

db('users').where({id:5}.delete()); // This will delete an user based on the ID.