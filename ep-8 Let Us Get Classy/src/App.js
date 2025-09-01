import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router"
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Error from "./components/Error";

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
    path:"/About",
    element:<About/>,
    
  },
  {
    path:"/Contact",
    element:<Contact/>
  },
  {
    path:"/restaurants/:resID",
    element:<Menu/>
  },

    ]
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>)