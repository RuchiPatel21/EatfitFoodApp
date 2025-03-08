import { useEffect, useState } from "react";

const useOnline =()=>{
    const [isOnline ,setIsOnline] = useState(navigator.onLine);
    useEffect(()=>{
        // setIsOnline(navigator.onLine);
        // setIsOnline(navigator.onLine);

        window.addEventListener("online",()=>{
            setIsOnline(true);
        })
        window.addEventListener("offline",()=>{
            setIsOnline(false);
        })

        return ()=>{
            // to remove eventlisteners
            window.removeEventListener("online",()=>{
                setIsOnline(true);
            })
            window.removeEventListener("offline",()=>{
                setIsOnline(false);
            })
        }
    },[])
    return isOnline;


}

export default useOnline
