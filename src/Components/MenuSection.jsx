import { HostUrl } from "../constants/restaurants"
import { useLocation } from 'react-router-dom';

// component for rendering menu component under menu details
const MenuSection=({isVeg,name,cost,avgRating,ratingCount,description,imgUrl,handleAddToCart})=>{
    const location = useLocation();
    console.log("location",location);
   
    return(
        <div className="d-flex justify-content-between align-items-center">
            <div className="w-75">
                <p>{isVeg?"🟢":"🔴"}</p>
                <h6>{name}</h6>
                <h6>Rs. {cost}</h6>
                {
                    avgRating && <h6 className="text-success">⭐{avgRating} <span className="text-secondary">{ratingCount}</span></h6>
                }
                {/* <h6 className="text-success">⭐{avgRating} <span className="text-secondary">{ratingCount}</span></h6> */}
                <p className="text-secondary">{description}</p>
            </div>
            <div className="d-flex flex-col gap-2 align-items-center ">
                <img src={HostUrl + imgUrl} alt="" style={{width:"150px",height:"150px",objectFit:"cover",borderRadius:"20px"}} />
            {
                location?.pathname.includes("menu")?<button className=" btn btn-sm btn-outline-primary" onClick={handleAddToCart}>Add to cart</button>:""
            }
            </div>
            {/* // style={{width:"200px",height:"200px"}} */}
        </div>
    )

}
export default MenuSection
// import { HostUrl } from "../constants/restaurants"
// // component for rendering menu component under menu details
// const MenuSection=({isVeg,name,cost,avgRating,ratingCount,description,imgUrl,})=>{
//     return(
//         <div className="d-flex justify-content-between align-items-center">
//             <div style={{width:"100%"}}>
//                 <p>{isVeg?"🟢":"🔴"}</p>
//                 <h6>{name}</h6>
//                 <h6>Rs. {cost}</h6>
//                 {
//                     avgRating && <h6 className="text-success">⭐{avgRating} <span className="text-secondary">{ratingCount}</span></h6>
//                 }
//                 {/* <h6 className="text-success">⭐{avgRating} <span className="text-secondary">{ratingCount}</span></h6> */}
//                 <p className="text-secondary">{description}</p>
//             </div>
//             <div style={{width:"20%"}}>
//                 <img src={HostUrl + imgUrl} alt="" style={{width:"100%"}} />
//             </div>
//             {/* // style={{width:"200px",height:"200px"}} */}
//         </div>
//     )

// }
// export default MenuSection