import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser =({users})=>{
  
   const deleteUser = (id) =>{
   ;
      console.log(users)
      axios
      .delete(`http://localhost:8080/api/users/${users[0].id}`)
      .then(response=>{
         window.location.href= "/"
         
      })
      .catch(error=>console.log(error))
   }
   return(
      <div>
         {users.map((user)=>(
         <div key={user.id}>
         <p>{user.name}</p>
         <p>{user.bio}</p>
         <button onClick={deleteUser}>Delete</button>
         </div>
         ))}
      </div>
   )
}
export default DeleteUser;