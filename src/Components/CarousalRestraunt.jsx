//"https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&collection=122381&tags=layout_FestiveEvent9&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useOnline from '../CustomHooks/useOnline';
import Restaurantcard from './RestaurantCardNew';

const CarousalRestraunt = () => {
    const {caraousalId} = useParams();
    const isOnline = useOnline();
    const [loadingStatus,setLoadingStatus]=useState(true);
    const [error,setError]=useState(false);
    const [restraunts,setRestraunts] = useState([]);
   
    useEffect(()=>{
        (async ()=>{
            try {
                if(isOnline==false){
                  setError(true);
                  return
                } else{
          
                  const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&collection=${caraousalId.split("-")[0]}&tags=${caraousalId.split("-")[1]}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`,{
                   header:{
                   "Content-Type:":"application/json; charset=utf-8"
                   }
                  })
                 
                  const data =await response.json();
                  console.log("response from Carousal Data",data);
                  // setRestraunts(data.data.cards.slice(3));
                  setRestraunts(data.data.cards);
                  // debugger
                  // console.log("data?.data?.cards.slice(3)",data?.data?.cards)
                  console.log("data?.data?.cards.slice(3)",data.data.cards.slice(3))
                  
                }
              } catch (error) {
                setError(true);
                // throw new Error(error);
              }
        })()
    },[])

    if(error){
        return(
          <div className="d-flex justify-content-center align-items-center" style={{height:"50vh"}}>
            {/* <h1 style={{color:"red",height:"50.66dvh"}}>Something Went Wrong..</h1> */}
            <h1 style={{color:"red",height:"100%"}}>Something Went Wrong..</h1>
          </div>
        )
      }
  return (
    <div className='container py-5 min-h-screen'>
      <h1>{restraunts[0]?.card?.card?.title}</h1>
      <p>{restraunts[0]?.card?.card?.description}</p>
      <p className='fw-bold'>{restraunts[2]?.card?.card?.gridElements?.infoWithStyle?.text}</p>
      <div id='restraunts' className='d-flex flex-wrap justify-content-center align-items-center gap-2'>
        {
          restraunts.slice(3).map((restaurant,index)=>{
            return(
              <Restaurantcard key={restaurant?.card?.card?.info?.id} {...restaurant?.card?.card?.info}/>
            )
          })
        }

      </div>
    </div>
  )
}

export default CarousalRestraunt
