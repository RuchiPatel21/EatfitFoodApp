import React from 'react'
import { useSelector } from 'react-redux'
import MenuSection from './MenuSection';
const Cart = () => {
  const data =useSelector((store)=>store.cart.items);
  console.log("Data of store",data);
  if(data.length == 0){
    return(
      <div className='d-flex align-items-center justify-content-center' style={{minHeight:"82.90dvh"}}>
       Your cart is empty..
      </div>
    )
  }
  return (
    <div className='min-h-screen mwnu_container py-4'>
      {
        data.map((dish,index)=>{
          return <MenuSection 
          isVeg={dish.card?.info?.isVeg} 
          name={dish.card?.info?.name} 
          // cost={dish.card?.info?.defaultPrice?dish.card?.info?.defaultPrice/100:dish.card?.info?.price/100} 
          cost={dish.card?.info?.defaultPrice/100 || dish.card?.info?.price/100} 
          avgRating={dish.card?.info?.ratings?.aggregatedRating?.rating} 
          ratingCount={dish.card?.info?.ratings?.aggregatedRating?.ratingCount} 
          description={dish.card?.info?.description} 
          imgUrl={dish.card?.info?.imageId}  
          // handleAddToCart={()=>handleAddToCart(dish)} 
           />
        })
      }
    </div>
  )
}

export default Cart




