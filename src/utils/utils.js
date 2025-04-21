
export const  getFavourites = () =>{
     const favourites = localStorage.getItem('favourites');
     if(favourites) return JSON.parse(favourites);
     return [];
}



export const addFavourites = phone =>{
       const favourites = getFavourites();
       const isExist = favourites.find(item=>item.id === phone.id);
       if(isExist){
              return console.log('already ace');
              
       }
       favourites.push(phone);
        console.log(phone); 
         localStorage.setItem('favourites', JSON.stringify(favourites));
       console.log(favourites);
       
}

export const removeFavourites = (id) =>{
       const favourites = getFavourites();
       const remainingFavourites = favourites.filter( phone=> phone.id !== id);
       localStorage.setItem('favourites', JSON.stringify(remainingFavourites));
}

