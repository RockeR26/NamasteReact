import React from "react";

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

    componentDidMount(){
        let count=0
        this.timer=setInterval(()=>{
            console.log("Hello World "+count++)
        },3000);
        
    }

    componentDidUpdate(){
        console.log(this.props.name+"Child CDU");

    }

    componentWillUnmount(){
        console.log(this.props.name+"Child CWU");
        clearInterval(this.timer)
        
    }

    render(){
        const {name,location}=this.props
        console.log(name+"Child Render");

           return (
           <div className="user-card"> 
        <h2>Name:{name} </h2> 
        <h3>location:{location}</h3> 
        <h3>contact:@rocker2601</h3>
    </div>)
    }


} 

export default UserClass