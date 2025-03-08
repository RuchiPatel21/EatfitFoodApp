import { useRouteError } from "react-router-dom"
const ErrorPage=()=>{
    const error= useRouteError();
    console.log("Error in Routing",error)
    return(
        <div className="d-flex justify-content-center align-items-center"style={{height:"100dvh"}}>
            <div>
            <h3>{error?.status} {error?.statusText}</h3>
            {/* <br/> */}
            <span className="text-danger">{error?.error?.message}</span>
            </div>
        </div>
    )
}

export default ErrorPage