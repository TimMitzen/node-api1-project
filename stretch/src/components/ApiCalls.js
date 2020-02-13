import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import DeleteUser from '../components/DeleteUser';
const ApiCalls = (props) =>{
   const [users,setUsers] = useState([])
   useEffect(()=>{
      axios
      .get('http://localhost:8080/api/users/')
      .then(response=>{
         setUsers(response.data)
         console.log(response.data)
      })
      .catch()
   },[setUsers])
   
   
   const deleteUser = () =>{
      const id = users;
      console.log(id)
      axios
      .delete(`http://localhost:8080/api/users/${id}`)
      .then(response=>{
         
      })
      .catch(error=>console.log(error))
   }

   return(
      <div>
         <DeleteUser users={users}/>
      
   </div>
   );
}
export default ApiCalls;


