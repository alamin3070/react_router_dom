import { useState, useEffect } from 'react';
import Card from "../components/Card";


function Home() {
  const[products,setProduct]=useState([]);
  const getProduct=()=>{
    
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data)=>{setProduct(data.products);});
  };
  useEffect(()=>{
    getProduct(); 
  },[]);
  return (
    <>
    <div>
      <div>
      <div className='flex justify-center mt-10 text-4xl'>
      <span>Our Top Collection</span>
      </div>
      <div className="flex justify-center mt-5">
    <img src='https://azim.commonsupport.com/Castro/assets/images/icons/separator-1.png'/>
    </div>
      </div>
      <div>
      <section className='container flex flex-wrap max-auto gap-5 justify-center mt-5'>
      {
         products.map((product)=>
          (<Card key={product.id} productInfo={product}/>))
      }
      
      </section>
      </div>
    
    </div>
      
    </>
  )
}

export default Home