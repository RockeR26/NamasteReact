import { useState } from "react";
import { LOGO_URL } from "../assets/link";
import { Link } from "react-router";
import useOnlineStatus from "../assets/useOnlineStatus";
const Header=()=>{
const [login,setLogin]=useState(false);
const status=useOnlineStatus();
const dotColor=status?"green":"red"

  return(
    <div className="container">
      <div className="logo-conatiner">
        <img className="logo" loading="eager" src={LOGO_URL} alt="" /> 
      </div>
      <ul className="nav-links">
        <li><Link to={"#"}>{status?("Online"):"Offline"} <span style={{color:dotColor}}>●</span></Link></li>  
        <li><Link to={"/"}>Home</Link></li>  
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/contact"}> Contact</Link></li>  
        <li><Link to={"/grocery"}>Grocery</Link></li>
        <li>🛒</li>  
        <li className="login"><button onClick={()=>setLogin(!login)} style={{backgroundColor:login&&"lightgrey"}}>{login?"Logout":"Login"}</button></li> 
      </ul>     
    </div>
  )
}

export default Header