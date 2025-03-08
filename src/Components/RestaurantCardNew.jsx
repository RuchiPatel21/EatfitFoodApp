import { Link } from "react-router-dom"
import { HostUrl } from "../constants/restaurants"
const Restaurantcard=({areaName,avgRating,cuisines,name,sla,cloudinaryImageId,id})=>{
    console.log("cuisines",cuisines);
    //imageURL , title,starRating,deliveryTime,cuisine,address
    return(
        <Link to={`/menu/${id}`} className="text-dark text-decoration-none">
        <div className="Restaurantcard mb-4">
            <div className="image"  style={{height:"216px",display:"flex",justifyContent:"center"}}>
                <img src={HostUrl+cloudinaryImageId} width="90%"height="100%" className="imageCard" style={{borderRadius:"26px"}} />
            </div>
            <div className="content mt-2">
                <h4 className="">{name}</h4>
                <div className="d-flex justify-content-between"><span>⭐{avgRating}</span> <span>{sla?.deliveryTime} mins</span></div>
                <div className="cuisines" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}title={cuisines&&cuisines.join(",")}>{cuisines&&cuisines.join(",")}</div>
                <p>{areaName}</p>
            </div>
        </div>
        </Link>
    )
}
export default Restaurantcard
// const Restaurantcard=({imageURL,title,starRating,deliveryTime,cuisine,address})=>{
//         //imageURL , title,starRating,deliveryTime,cuisine,address
//         return(
//             <div className="Restaurantcard mb-4">
//                 <div className="image"  style={{background:`url(${imageURL})`,backgroundPosition:"center",backgroundRepeat: "no-repeat",backgroundSize:"cover",height:"216px",display:"flex",paddingLeft:"20px",alignItems:"end",borderRadius:"26px"}}>
//                     <h1>ITEMS AT ₹179</h1>
//                 </div>
//                 <div className="content px-2">
//                     <h4>{title}</h4>
//                     <div className="d-flex justify-content-between"><span>⭐{starRating}</span> <span>{deliveryTime}</span></div>
//                     <div>{cuisine}</div>
//                     <p>{address}</p>
//                 </div>
//             </div>
//         )
//     }
//export default Restaurantcard