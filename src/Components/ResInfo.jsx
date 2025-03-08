const ResInfo=({name,avgRating,cuisines,deliveryTime,distance,costForTwo,ratingCount,remark,fromShimmerMenu})=>{
    return(
        <div className={fromShimmerMenu?"info_container p-3 h-64":"info_container p-3 "}>
            <h1 className={fromShimmerMenu?"w-11/12 h-6 ShimmerText":""}>{name}</h1>
            <p >⭐{avgRating} {ratingCount}{costForTwo}</p>
            <p className={fromShimmerMenu?"w-11/12 h-6 ShimmerText":""}>{cuisines}</p>
            <p className={fromShimmerMenu?"w-11/12 h-6 ShimmerText":""}>{deliveryTime}</p>
            {
            !fromShimmerMenu?<p>{distance}| {remark && remark.replace(/<b>(.*?)<\/b>/,"")}</p>:<p className={fromShimmerMenu?"w-11/12 h-6 ShimmerText":""}></p>
            
            }
            {/* <p>{distance}| {remark.replace(/<\/?b>/g,"")}</p> */}
        </div>
    )
}

export default ResInfo