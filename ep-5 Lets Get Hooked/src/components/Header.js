import { LOGO_URL } from "../assets/link"
const Header=()=>{
  return(
    <div className="header-container">
      <div className="logo-conatiner">
        <img className="logo" src={LOGO_URL} alt="" /> 
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