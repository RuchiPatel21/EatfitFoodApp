import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom"
// import { Outlet, useParams } from "react-router-dom"
// import { ApiUrlForMenu } from "../constants/restaurants";
import ResInfo from "./ResInfo";
import Shimmer from "./Shimmer";
import MenuSection from "./MenuSection";
import useMenu from "../CustomHooks/useMenu";
import NormalMenu from "./NormalMenu";
import NestedMenu from "./NestedMenu";
import ShimmerMenu from "./ShimmerMenu";
const Menu=()=>{
    const [show,setShow] = useState(0);
    const [showNested,setShowNested] = useState(0);
    const {id}=useParams();
    // const [menuData,setMenuData]= useState([]);
    // const [subMenuData,setSubMenuData]= useState([]);
    // const [loading,setLoading]= useState(true);
    // useMenu(setMenuData,setLoading,id);
    const menuData=useMenu(id);
//     useEffect(()=>{
//    try {
//      (async()=>{
//          const response= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
//         //  const response= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=28405&catalog_qa=undefined&submitAction=ENTER`);
//          const json = await response.json();
//          console.log("Data filtered",json?.data?.cards);
//          setMenuData(json?.data?.cards);
//         //  setSubMenuData(json?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards);
//          setLoading(false);
//          console.log("Data from Api Menu component:",json);
//      })()
//    } catch (error) {
//         console.log("Error in calling the Menu API",error)
//    }

//     },[])
    console.log(id);
    // if(loading ){
    if(menuData&&menuData.length==0){
    // if(menuData.length>=0){
        return <div className="d-flex justify-content-center gap-4 flex-wrap" >
            {/* <Shimmer/> */}
            <ShimmerMenu/>
        </div>
    }

    const Cateogries=menuData[4]?.groupedCard.cardGroupMap.REGULAR.cards;
    const normalMenu=Cateogries.filter((menuCategory)=>{
        return menuCategory?.card?.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    const nestedMenu=Cateogries.filter((nestedCategory)=>{
        return nestedCategory?.card?.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    })

    console.log("normalMenu",normalMenu);
    console.log("nestedMenu",nestedMenu);

    console.log("menu data",menuData)
    const {name,avgRating,totalRatingsString,costForTwoMessage,cuisines,sla,expectationNotifiers}= menuData[2]?.card?.card?.info;
    console.log("name,avgRating,totalRatingsString,costForTwoMessage,cuisines,sla,expectationNotifiers",name,avgRating,totalRatingsString,costForTwoMessage,cuisines,sla,expectationNotifiers)
    const {slaString,lastMileTravelString}=sla;
    const {enrichedText} = expectationNotifiers != null ? expectationNotifiers[0] : "";
    return(
        <div className="mwnu_container"> 
            <div className="Menu">
            <ResInfo
            name={name} avgRating={avgRating} cuisines={cuisines.join(",")} deliveryTime={slaString} distance={lastMileTravelString} costForTwo={costForTwoMessage} ratingCount={totalRatingsString} 
            remark={enrichedText}  
            //   remark="Test"  
                    />
            </div>

            <div className="p-3">
                {
                    normalMenu.map((normalCategory,index)=>{
                        return(
                           <NormalMenu normalCollection={normalCategory} index={index} show={show} showData={show==index?true:false} setShow={setShow}/>
                        )
                    })
                
                }
            </div>
            {/* <NormalMenu normalCollection={normalMenu}/> */}
            <div className="p-3">
                {
                    nestedMenu.map((category ,index)=>{
                        return(
                           <NestedMenu category={category}  index={index} showNested={showNested} showData={showNested==index?true:false} setShowNested={setShowNested}/>
                        )
                    })
                }
            </div>
        </div>
        
    )
}
export default Menu


// data for 1st part will be in 3 object in datafromAPI.data.cards so it will be datafromAPI.data.cards[2]
// first category data in array of index 4 of above array in that 2 index of cards there will be itemCards  array containing 20 objs of recommended


// To use children in menu as well we will use outlets
// import { useEffect } from "react";
// import { Outlet, useParams } from "react-router-dom"
// const Menu=()=>{
//     const id=useParams();
//     useEffect(()=>{

//     },[])
//     console.log(id);
//     return(
//         <div className="Menu">
//             This Is menu page<br/>
//             <Outlet/>
//         </div>
//     )
// }
// export default Menu