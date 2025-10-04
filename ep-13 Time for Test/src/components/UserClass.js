import React from "react";
import UserContext from "../context/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.state={
            name:"dummy",
            location: "dummy"
        }

        console.log(this.props.name+"Child Constructor");
    }


    render(){
        const {name,location}=this.props
        console.log(name+"Child Render");

           return (

<>

    <div className="user-card"> 
        <h2>Name:{name} </h2> 
        <h3>location:{location}</h3> 
        <h3>contact:@rocker2601</h3>
        <UserContext.Consumer>
            {(data)=><h5>- {data.user}</h5>}
        </UserContext.Consumer>
        
    </div>
</>
)
    }


} 

export default UserClass