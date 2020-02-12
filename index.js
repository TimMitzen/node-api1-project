// implement your API here
const express = require('express');

const users = require('./data/seeds/users.js');

const server = express()
server.get('/',(req,res)=>{
   res.json({ message: 'This is the server'})
})

server.post('/api/users', (req,res) => {
   const newUser = {
      id: users.length +1, //adds 1 to the user id
      name: req.body.name,
      bio: req.body.bio,
   }
   
   users.push(newUser);//pushs new user to the users object
   res.statusMessage(201).json(newUser); //saying its completed

});

// server.get('/api/users/:id', (req,res)=>{
//    findById()
//    .then()
//    .catch()
// });
const port = 8000

server.listen(port,()=>{
   console.log(`server has started on ${port}`)
});

