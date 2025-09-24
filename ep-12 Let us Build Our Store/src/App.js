import ReactDOM from "react-dom/client";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router"
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Error from "./components/Error";
import { lazy, Suspense, useEffect, useState } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./context/UserContext";
import store from "./Redux/store";
import {Provider} from 'react-redux'


const Grocery=lazy(()=>import("./components/Grocery"))


const App = () => {
  const [username,setUsername]= useState("")
useEffect(()=>{
  // Make API call to get username
  setUsername("Rocker");
},[])





  return (
    <Provider store={store}>
      <UserContext.Provider value={{user:username,setUser:setUsername}}>
        <Header/>
        <Outlet/>
      </UserContext.Provider>
    </Provider>

   
  )
}

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
    {
    path:"/",
    element:<Body/>
  },    
    {
    path:"/about",
    element:<About/>,
    
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/grocery",
    element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
  },
  {
    path:"/restaurants/:resID",
    element:<Menu/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },

    ]
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>)