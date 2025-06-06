import React, { useState } from "react";
import image from "../assets/images/banner.png";

const Hero = ({data,overallPhone,setOverallPhones}) => {

  let counter = 0;
    const [searchText, setSearchText] = useState('');
    const [countSearch,setCountSearch] = useState(counter);

 
    const handlesearch = (e,text) =>{
        e.preventDefault();
        if(text === ''){
          return setOverallPhones(data);
        }
        const searchedPhones = overallPhone.filter(phone=>
            phone?.name?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
            phone?.brand?.toLowerCase().split(' ').includes(text.toLowerCase())
        )
      
        setOverallPhones(searchedPhones);
        
    }

    console.log(countSearch);
    
  return (
    <div>
      <div>
        <img src={image} alt="bannerImg" />
      </div>
      <div className="text-center space-y-4">
        <h1 className="font-thin text-7xl py-3 text-gray-900 ">
          Browse,search,View, Buy
        </h1>
        <p className="text-gray-500 font-light text-sm">
          Best Plan to browse, search, view details and purchasw top
          <br />
          flagship Phones of the current time -- flagshipFaceOff
        </p>
        <form onSubmit={(e)=>{
            handlesearch(e,searchText);
            setSearchText('');
            setCountSearch(counter++);
           
          }}
          className="flex flex-col md:flex-row gap-5 justify-center items-center md:px-10">
          <input
            value={searchText}
            onChange={e =>{
              setSearchText(e.target.value);
              
            }}
            type="text"
            placeholder="Search Phone by Name"
            className=" w-2/3 h-12 px-4 mb-3 focus:outline-none focus:shadow-gray-300 bg-gray-100 rounded-md   shadow-md"
          />
          <div>
            <button type="submit" href="#_" className="cursor-pointer  relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Search</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
