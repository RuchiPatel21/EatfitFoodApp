
    const [menuShowedForSmallDevice,setMenuShowedForSmallDevice]=useState(false);
    const menuTabForSmallDevice= useRef();
    const hideAndShowMenu=()=>{
        menuTabForSmallDevice.current.classList.toggle("hidden");
        menuTabForSmallDevice.current.classList.toggle("flex");
        if(Array.from(menuTabForSmallDevice.current.classList).includes("flex")){
            setMenuShowedForSmallDevice(true);
        } else{
            setMenuShowedForSmallDevice(false);
        }
        // Array
    }
    return(
        <div className="box-border  ">
            <nav className="flex justify-around p-5 items-center bg-slate-300">
                <ul>
                    <li>Amish Tiwari</li>
                    <a className="navbar-brand" href="#"><img src={eaifit} style={{width:"100px"}}/>
                <span>{isOnline?"🟢":"🔴"}</span>
                
                </a>
                </ul>
                <ul className="text-indigo-500 hidden gap-4 lg:flex">
                   <NavLink to="/" className={({isActive})=>isActive?"text-red-500 cursor-pointer":"hover:text-red-500 cursor-pointer"}><li>Home</li></NavLink>
                   <NavLink to="/about" className={({isActive})=>isActive?"text-red-500 cursor-pointer":"hover:text-red-500 cursor-pointer"}><li>About</li></NavLink>
                   <NavLink to="/contact" className={({isActive})=>isActive?"text-red-500 cursor-pointer":"hover:text-red-500 cursor-pointer"}><li>Contact Us</li></NavLink>
                   <NavLink to="/instamart" className={({isActive})=>isActive?"text-red-500 cursor-pointer":"hover:text-red-500 cursor-pointer"}><li>Instamart</li></NavLink>
                   <NavLink to="/cart" className={({isActive})=>isActive?"text-red-500 cursor-pointer":"hover:text-red-500 cursor-pointer"}><li>Cart🛒</li></NavLink>
                </ul>
                   {/* 
                   <NavLink to="/about" className={({isActive})=>isActive?"text-red-500 cursor-pointer":"hover:text-red-500 cursor-pointer"}><li>About</li></NavLink>
                   
                   */}
                {/* <button className="lg:hidden  " onClick={hideAndShowMenu}>
                    Test
                </button> */}
                <div className="transition-all flex flex-col gap-1 items-center lg:hidden" onClick={hideAndShowMenu}>
                    <p className={menuShowedForSmallDevice?"border border-black w-5 rotate-45":"border border-black w-5"}></p>
                    <p className={menuShowedForSmallDevice?"hidden":"border border-black w-5"}></p>
                    <p className={menuShowedForSmallDevice?"border border-black w-5 -rotate-45":"border border-black w-5"}></p>
                </div>
              
            </nav>
            <div className=" justify-end  hidden" ref={menuTabForSmallDevice}>
                <ul className="text-indigo-500 w-2/5 justify-center lg:hidden gap-4 flex flex-col absolute mt-0.5 px-20 bg-slate-300/90 border border-black text-center items-center">
                <NavLink to="/" className={({isActive})=>isActive?"text-red-500 cursor-pointer":"hover:text-red-500 cursor-pointer"}><li>Home</li></NavLink>
                   <NavLink to="/about" className={({isActive})=>isActive?"text-red-500 cursor-pointer":"hover:text-red-500 cursor-pointer"}><li>About</li></NavLink>
                   <NavLink to="/contact" className={({isActive})=>isActive?"text-red-500 cursor-pointer":"hover:text-red-500 cursor-pointer"}><li>Contact Us</li></NavLink>
                   <NavLink to="/instamart" className={({isActive})=>isActive?"text-red-500 cursor-pointer":"hover:text-red-500 cursor-pointer"}><li>Instamart</li></NavLink>
                   <NavLink to="/cart" className={({isActive})=>isActive?"text-red-500 cursor-pointer":"hover:text-red-500 cursor-pointer"}><li>Cart🛒</li></NavLink>
                </ul>
            </div>
        </div>
    )