import { useEffect, useState } from "react"

const User=({name})=>{
    const[count,setCount]=useState(0);

    // useEffect(()=>{
    //     let num=count;
    //    const timer= setInterval(()=>{
    //          console.log("Hello world " + num++);
    //         setCount(count+1);
    //     },2000)

    //     return()=>{
    //         console.log("component is unmounting");  
    //         clearInterval(timer) 
    //     }
    // },[])

    return <div className="user-card"> 
        <h1 onClick={()=>{setCount(count=>count+1);
            setCount(count=>count+1);
        }}>Count:{count}</h1>
        <h2>Name: {name}</h2> 
        <h3>location:Kolkata</h3> 
        <h3>contact:@rocker2601</h3>
    </div>
}

export default User