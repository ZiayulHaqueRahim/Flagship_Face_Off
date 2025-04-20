import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import PhoneCard from "./PhoneCard";

const PhonesContainer = ({overallPhone,setOverallPhones}) => {

  const [displayPhones, setDisplayPhones] = useState([]);
  const [showAllPhones, setShowAllPhones] = useState(false);

  useEffect(
    ()=>{
        if(showAllPhones){
            setDisplayPhones(overallPhone);
        }else{  
            setDisplayPhones(overallPhone.slice(0,6));
        }
    },[overallPhone,showAllPhones]
  );

  

  return (
    <div className="py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {displayPhones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
      <Link
        href="#_"
        className="relative mt-8 inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span onClick={()=>{ 
                setShowAllPhones(prev =>!prev)
                if(showAllPhones) window.scrollTo(0,400);
            }}
            
            className="relative">Show {showAllPhones ? 'less' : 'All' }</span>
      </Link>
    </div>
  );
};

export default PhonesContainer;
