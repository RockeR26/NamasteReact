import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router"
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Error from "./components/Error";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";

const Grocery=lazy(()=>import("./components/Grocery"))


const App = () => {





  return (
    <>
    <Header/>
    <Outlet/>
    </>
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

    ]
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>)