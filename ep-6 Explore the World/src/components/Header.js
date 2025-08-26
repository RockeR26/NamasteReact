import { LOGO_URL } from "../assets/link"
import logo from "../assets/logo.png"
const Header=()=>{
    console.log(logo)

  return(
    <div className="header-container">
      <div className="logo-conatiner">
        <img className="logo" loading="eager" src={LOGO_URL} alt="" /> 
      </div>
      <ul className="nav-links">
        <li>Home</li>  
        <li>About</li>
        <li>Contact</li>  
        <li>🛒</li>   
      </ul>     
    </div>
  )
}

export default Header