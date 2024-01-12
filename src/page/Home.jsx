import { useState, useEffect } from 'react';
import Card from "../components/Card";
import { Link } from 'react-router-dom';


function Home() {
  const[products,setProduct]=useState([]);
  const getProduct=()=>{
    
    fetch('https://dummyjson.com/products?limit=4')
    .then(res => res.json())
    .then((data)=>{setProduct(data.products);});
  };
  useEffect(()=>{
    getProduct(); 
  },[]);
  return (
    <>
   
    <div>
    <div className='container flex justify-between mt-6 items-center'>
        <div>
             <div className='text-6xl leading-normal'>
                <span>Up To <br/><span className='text-red-500'>50%</span> Discount</span>
              </div> 
              <h3 className='font-medium tracking-wide'>Winter Lookbook - 2024</h3>
              <p className='mt-6'>An apple mobile which is nothing like apple.</p>
              <button className="btn bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded mt-9">View More</button>
        </div>
        <div className=''>
         <img className='h-96' src='https://assets.stickpng.com/images/61d2f93392b57c0004c64747.png'/>
        </div>
    </div>
    <div>
    <div className='flex justify-center mt-10 text-4xl'>
      <span>Our Top Collection</span>
      </div>
       <p className='text-center mt-3'>There are some product that we featured for choose your best</p>
    </div>
    <div className="flex justify-center">
    <img src='https://azim.commonsupport.com/Castro/assets/images/icons/separator-1.png'/>
    </div>
      <div className='gap-2 flex  mt-6'>
        {
          products.map((product)=>
            (<Card key={product.id} productInfo={product}/>))
        }
      </div>
      <div className="flex flex-col w-full border-opacity-50 mt-20">
        <div className="divider">
          <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://cdn.dribbble.com/users/4889048/avatars/small/b670ea1f50eb7a25f70b117d9653e57b.png?1702447224" />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-8 text-2xl'>
      <span>Flatonica</span>
      </div>
    
    
       <p className='text-center mt-3'>An advanced unit for creating and developing Web3 solutions</p>
      
      <div className='flex justify-center mt-3'>
          <Link to={"/shop"}><button className="btn bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">View All Product</button></Link>
      </div>
    </div>
    
    </>
  );
}

export default Home;