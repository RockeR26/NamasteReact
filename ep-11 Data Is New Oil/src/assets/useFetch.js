import { useEffect, useState } from "react";

const useFetch=(url)=>{
    const [data,setData]=useState(null);

    useEffect(()=>{
        fetchData(url);
    },[])

    const fetchData=async(url)=>{
        const res=await(await fetch(url)).json();
        setData(res);
        
    }

    return data;

}

export default useFetch;