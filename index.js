// implement your API here
const express = require('express');

const users = require('./data/db.js');

const server = express()

const cors = require('cors')
server.use(express.json());
server.use(cors())


server.get('/',(req,res)=>{
   res.json({ message: 'This is the server'})
})

server.get('/api/users',(req,res)=>{
   const userInfo = req.body;

   users.find()
   .then(user=>{
      res.status(201).json(user);
   })
   .catch(error=>{
      res.status(500).json({errorMessage:'The users information could not be retrieved.'})
   })
})

server.post('/api/users', (req,res) => {
   // const newUser = {
   //    id: users.length +1, //adds 1 to the user id
   //    name: req.body.name,
   //    bio: req.body.bio,
   // }
   const userInfo = req.body;

   users.insert(userInfo)
   .then(user=>{
      
      res.status(201).json(user)
   })
   .catch(error=>{
      res.status(500).json({errorMessage:'There was an error while saving the user to the database'})
   })
   
   ///pushs new user to the users object
    //saying its completed

});

server.get('/api/users/:id', (req,res)=>{
   const id = req.params.id;
   users.findById(id)
   .then(user=>{
      if(user)
      {
         res.status(201).json(user)
      }
      else{
      res.status(404).json({errorMessage: 'User Not found'}) }
   })
})

server.delete('/api/users/:id',(req,res)=>{
   const id = req.params.id;
   users.remove(id)
   .then(deleted=>{
      if(deleted){
         res.status(200).end()
      }else{
         res.status(404).json({errorMessage:'user not found'})
      }
   })
   .catch(error=>{
      res.status(500).json({errorMessage:'The user could not be removed'})

   })
});

server.put('/api/users/:id',(req,res)=>{
   const id = req.params.id;
   const changes = req.body;
   const name= req.body.name;
   const bio = req.body.bio;//needs to be req
   users.update(id,changes)
   .then(update=>{
         if(!update){
           res.status(404).json({errorMessage: "user id not found"})
         }
       if(bio && name){
          res.status(200).json(changes)
         
       }else{
          res.status(401).json({errorMessage:'user or bio missing'})
       }
    })
    .catch(error=>{
       res.status(500).json({errorMessage:''})
    })

})
// server.get

// server.get('/api/users/:id', (req,res)=>{
//    findById()
//    .then()
//    .catch()
// });
const port = 8080

server.listen(port,()=>{
   console.log(`server has started on ${port}`)
});

