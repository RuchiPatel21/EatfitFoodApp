import "./test.css"
const Shimmer= ()=>{
    return(
    new Array(20).fill(0).map((element,index)=>{
       return(
        <div key={index} className="Restaurantcard ShimmerCard shine mb-4">
        <div className="image ShimmerImg "  style={{height:"216px",display:"flex"}}>
            <img src="" width="90%"height="100%" className="" style={{borderRadius:"26px"}} />
        </div>
        <div className="content px-2 mt-2">
            <h4 className="ShimmerText"></h4>
            <div className="d-flex justify-content-between "><span className="ShimmerTextSPan"></span> <span  className="ShimmerTextSPan"></span></div>
            <div className="cuisines ShimmerText" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}title=""></div>
            <p></p>
        </div>
    </div>
       )
          }
        )
    )
}
export default Shimmer