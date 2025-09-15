import { useContext } from "react"
import UserContext from "../context/UserContext"

const Contact=()=>{
    const {user}=useContext(UserContext)
return (
            <div className="body-container">
                <h1>Contact Us</h1>
                <h4>email us at food@foodapp.com</h4>
                <h5>- {user}</h5>
            </div>
)
}

export default Contact