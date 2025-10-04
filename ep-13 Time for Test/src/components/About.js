import React from "react";
import User from "./User"
import UserClass from "./UserClass"


class About extends React.Component{


constructor(props){
    super(props);

}

componentDidMount(){
    
}

render(){
    
    return(
    <>
        <div className="body-container">
            <h1>About</h1>
            <h4>There is nothing to tell about us</h4>
        </div>
        <div className="user-container">
            <UserClass name={"dummy"}/>
        </div>
    </>
    )
}



}

export default About