import { useContext, useState } from "react";
import { LOGO_URL } from "../assets/link";
import { NavLink } from "react-router";
import useOnlineStatus from "../assets/useOnlineStatus";
import UserContext from "../context/UserContext";
import {useSelector} from 'react-redux'

const Header = () => {
  const [login, setLogin] = useState(false);
  const {user}=useContext(UserContext);

  const status = useOnlineStatus();
  const dotColor = status ? "green" : "red"
  const items=useSelector((store)=>store.cart.items);

  return (
    <div className="container flex justify-between mb-3 shadow-xl rounded-2xl bg-gray-100">
      <div>
        <img className="w-24" loading="eager" src={LOGO_URL} alt="" />
      </div>
      <ul className="flex mx-2 items-center">
        <li className="px-2 text-lg">{status ? ("Online") : "Offline"} <span style={{ color: dotColor }}>●</span></li>
        <li className="px-2 text-lg hover:underline text-gray-400"><NavLink to={"/"} className={({ isActive }) => isActive ? "text-black" : ""}>Home</NavLink></li>
        <li className="px-2 text-lg hover:underline text-gray-400"><NavLink to={"/about"} className={({ isActive }) => isActive ? "text-black" : ""} >About</NavLink></li>
        <li className="px-2 text-lg hover:underline text-gray-400"><NavLink to={"/contact"} className={({ isActive }) => isActive ? "text-black" : ""} > Contact</NavLink></li>
        <li className="px-2 text-lg hover:underline text-gray-400"><NavLink to={"/grocery"} className={({ isActive }) => isActive ? "text-black" : ""} >Grocery</NavLink></li>
        <li className="px-2 text-lg  text-gray-400"><NavLink to={"/cart"} className={({ isActive }) => isActive ? "text-black" : ""} > <span className="border-2 px-2 py-1 rounded-lg rounded-t-3xl">{items.length}</span> <span className="hover:underline">Cart</span></NavLink></li>
        <li ><button className="login w-24 text-lg text-slate-200 bg-orange-500 py-2 shadow-xl border-gray-300 border-2 rounded-3xl hover:bg-orange-300 cursor-pointer" onClick={() => setLogin(!login)} style={{ backgroundColor: login && "black" }}>{login ? "Logout" : "Login"}</button></li>
        <li className="px-2 text-lg hover:underline text-gray-400">{login?user:"Guest"}</li>
      </ul>
    </div>
  )
}

export default Header