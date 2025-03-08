import { useEffect, useState } from "react";

const useMenu=(id)=>{
    const [menuData,setMenuData]= useState([]);
    useEffect(()=>{
        try {
          (async()=>{
              const response= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
             //  const response= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=28405&catalog_qa=undefined&submitAction=ENTER`);
              const json = await response.json();
              console.log("Data filtered",json?.data?.cards);
              setMenuData(json?.data?.cards);
             //  setSubMenuData(json?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards);
            //   setLoading(false);
              console.log("Data from Api Menu component:",json);
          })()
        } catch (error) {
             console.log("Error in calling the Menu API",error)
        }
     
         },[])

    return menuData

}

export default useMenu

// import { useEffect, useState } from "react";

// const useMenu=(setMenuData,setLoading,id)=>{
//     // const [menuData,setMenuData]= useState([]);
//     // const [loading,setLoading]= useState(true);
//     // logic to fetch menu data
//     useEffect(()=>{
//         try {
//           (async()=>{
//               const response= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
//              //  const response= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=28405&catalog_qa=undefined&submitAction=ENTER`);
//               const json = await response.json();
//               console.log("Data filtered",json?.data?.cards);
//               setMenuData(json?.data?.cards);
//              //  setSubMenuData(json?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards);
//               setLoading(false);
//               console.log("Data from Api Menu component:",json);
//           })()
//         } catch (error) {
//              console.log("Error in calling the Menu API",error)
//         }
     
//          },[])

//     return {
//         // menuData,loading
//     }
// }

// export default useMenu
