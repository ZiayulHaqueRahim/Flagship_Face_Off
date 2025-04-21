import React from "react";
import { Link } from "react-router";

const PhoneCard = ({ phone , deletable}) => {
  const { brand, storage, id, name, price, camera_info, description, image } = phone || {};


    let datas;
    for (let data in price) {
       datas =  price[data];
    };
    
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt={id} />
      </figure>
      <div className="card-body gap-1 px-1 ">
        <h2 className=" px-1  card-title">{name}</h2>
        <h5>
          <span className="font-bold">Brand:</span>
          {brand}
        </h5>
        <p>
          <span className="font-bold">Info:</span>
          {description}{" "}
        </p>
        <p>
          <span className="font-bold">Spec:</span>
          {camera_info}
        </p>

        <div className="flex flex-row justify-end px-3">
          <p>
            <span className="font-bold">Varien:</span>
          </p>
          {storage.map((rom, index) => (
            <p key={index}>{rom}</p>
          ))}
        
          
         <p><span className="font-bold">Pricing:</span>{datas}</p> 
        </div>
      </div>
      <div>
        <div className="card-actions justify-end">
          <Link
            to={`/details/${id}`}
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              More Info
            </span>
          </Link>
        </div>
      </div>
      <div className="absolute  -right-3 -top-3">
        {deletable && <button className="cursor-pointer" >X</button>}
      </div>
    </div>
  );
};

export default PhoneCard;
