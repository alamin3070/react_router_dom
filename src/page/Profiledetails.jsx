import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profilecard from '../Components/Profilecard';

const Profiledetails = () => {
    const{id}=useParams();
    const[singleUser,setsingleUser]=useState({});
    const getsingleUser=()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then((data)=>setsingleUser(data));
            
    };
    useEffect(()=>{
        getsingleUser();
    },[]);
  return (
    <Profilecard single={singleUser} />
  );
}

export default Profiledetails;