import ResCard from "./ResCard"
import { useEffect, useState } from "react"
import { URL } from "../assets/link"
import Shimmer from "./Shimmer"


const Body = () => {
    const [list, setList] = useState([]);
    const [top5, setTop5] = useState(false);
    const [resList,setResList]=useState([]);

    useEffect(()=>{
        fetchData(URL);
    },[])

    const fetchData=async(url)=>{
        try {
            const res=await fetch(url);
            const data = await res.json();
            const resData=data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
            setList(resData);
            setResList(resData);
        } catch (error) {
          console.error(error)  
        }

    }

    const handleClick = () => {
        if (!top5) {
            const top5 = list.sort((a, b) => b - a).slice(0, 5)
            const filetredSort = list.filter((res) => top5.includes(res)).sort((a, b) => b.info.avgRating - a.info.avgRating)
            setResList(filetredSort);
            setTop5(true);
        }else{
            setResList(list);
            setTop5(false);   
        }
    }


    return (
        <div className="body-conatiner">
            <div className="filter">
                <button onClick={handleClick} style={{backgroundColor:top5&&'gray'}}>Top 5 Restuarants</button>
            </div>
            <div className="res-container">
                {resList.map((res) => <ResCard resInfo={res.info} key={res.info.id} />)}
            </div>
        </div>
    )
}

export default Body