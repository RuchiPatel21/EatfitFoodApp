import './App.css';
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"
import { Outlet } from 'react-router-dom';
import { UserContext } from './utils/UserContext.js';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './utils/store.js';
import useOnline from './CustomHooks/useOnline.js';
function App() {
  // const [name,setName] = useState({});
  const [name,setName] = useState("");
  const [carousalData,setCarousalData] = useState([]);
  const [darkTheme,setDarkTheme] =useState(false);
  useEffect(()=>{
    setName('AmishTiwari');
    setDarkTheme(JSON.parse(localStorage.getItem("eatfit_Theme")));
  },[])
  useEffect(()=>{
    localStorage.setItem("eatfit_Theme",JSON.stringify(darkTheme));
  },[darkTheme])
  const isOnline = useOnline();
  return (
    // <div className="App">
    //   <Header/>
    //   <RouterProvider router={AppRouter} />
    //   {/* <Body/> */}
    //   {/* <Shimmer/> */}
    //   <Footer/>
    // </div>
<Provider store={store}>
  <UserContext.Provider value={{username:name,setName,carousalData,setCarousalData,darkTheme,setDarkTheme}}>
      {/* <div className={isOnline?"App ":"App pe-none" && darkTheme?"darkTheme":""}> */}
      <div className={`${isOnline?"App" :"App pe-none"} ${darkTheme?"darkTheme":""}`}>
        <Header/>
        
        {/* <marquee>Test</marquee> */}
        {/* <Body/> */}
        <Outlet/>
        <Footer/>
      </div>
  </UserContext.Provider>
</Provider>

  );
}
export default App;
