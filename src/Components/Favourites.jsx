import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import { getFavourites } from "../utils/utils";

const Favourites = () => {
    const [displayPhones, setDisplayPhones] = useState([]);
    useEffect(()=>{
        const savedFavourites = getFavourites();
        setDisplayPhones(savedFavourites)
    },[])
  return (
    <div>
      <div className="py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {displayPhones.map((phone) => (
            <PhoneCard deletable={true} key={phone.id} phone={phone} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
