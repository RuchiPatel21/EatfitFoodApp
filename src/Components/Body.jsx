import Carousel from "./Carousel.jsx"
import Filters from "./Filters.jsx"
import Searchbar from "./Searchbar.jsx"
// import CardContainer from "./CardContainer"
import CardContainer from "./Cardcontainer"

const Body=()=>{
    return(
        <>
            {/* <p className="text-center">This is body</p> */}
            <Carousel/>
            {/* <div className="d-flex justify-content-between ps-2 pe-2">
                <Filters/>
                <Searchbar/>
            </div> */}
            <CardContainer/>

        </>
    )
}

export default Body