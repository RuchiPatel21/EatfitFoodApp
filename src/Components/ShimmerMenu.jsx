import NestedMenu from "./NestedMenu"
import NormalMenu from "./NormalMenu"
import ResInfo from "./ResInfo"

const ShimmerMenu = ()=>{
    return(
        <div className="mwnu_container ShimmerCard shine"> 
        <div className="Menu">
        <ResInfo
        name={""} avgRating={""} cuisines={[]} deliveryTime={""} distance={""} costForTwo={""} ratingCount={""} 
        remark={""}  fromShimmerMenu={true} 
        //   remark="Test"  
                />
        </div>

        <div className="p-3 pe-none">
            {
                new Array(5).fill(0).map((normalCategory,index)=>{
                    return(
                       <NormalMenu normalCollection={""} index={index} show={""} fromShimmerMenu={true}/>
                    )
                })
            
            }
        </div>
        {/* <NormalMenu normalCollection={normalMenu}/> */}
        <div className="p-3 pe-none">
            {
                new Array(5).fill(0).map((category ,index)=>{
                    return(
                       <NestedMenu category={""}  index={index} showNested={""}  fromShimmerMenu={true}/>
                    )
                })
            }
        </div>
    </div>
    )
}

export default ShimmerMenu