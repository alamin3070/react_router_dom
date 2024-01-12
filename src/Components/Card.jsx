import { Link } from "react-router-dom";

export const Card = ({productInfo}) => {
  const {title,id,price,description,rating,thumbnail}=productInfo;
  return (
    <>
    
    <div className="card w-64 bg-[#E1E3D3] shadow-xl">
  
  <div className="avatar flex justify-center">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={thumbnail} />
  </div>
  </div>
 
  <div className="card-body text-black">
    <h2 className="card-title">{title}</h2>
    <p>{price}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to={`/profiledetails/${id}`}><button className="btn btn-primary">Buy Now</button></Link>
    </div>
  </div>
</div>
    </>
    
  )
}

export default Card