import React from 'react';

function Profilecard({single}) {
    const{title,id,price,description,rating,thumbnail}=single;
  return (
    <>
    <div className="card card-side bg-base-100 shadow-xl mt-5">
  <figure><img src={thumbnail} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{id}</p>
    <p>{price}</p>
    <p>{rating}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Order</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Profilecard