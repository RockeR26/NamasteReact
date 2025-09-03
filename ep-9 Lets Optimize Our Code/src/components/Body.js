import ResCard from "./ResCard"
import { useState } from "react"
import { URL } from "../assets/link"
import Shimmer from "./Shimmer"
import useFetch from "../assets/useFetch"


const Body = () => {
    const [text, setText] = useState("");
    const [top5, setTop5] = useState(false);
    const data = useFetch(URL);
    const resList = data?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants
    const filteredList=resList&&resList.filter(res => res.info.name.toLowerCase().includes(text.toLowerCase()) || res.info.cuisines.join(',').toLowerCase().includes(text.toLowerCase()))
    const list=top5?filteredList.sort((a,b)=>b.info.avgRating-a.info.avgRating).slice(0,5) : filteredList
    


    return (
        <div className="body-container">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-text" value={text} onChange={(e) => setText(e.target.value)} placeholder="             Search 🔍" />
                </div>
                <button onClick={() => setTop5(!top5)} style={{ backgroundColor: top5 && 'lightgrey' }}>Top 5 Restuarants</button>
            </div>
            {(resList === undefined) ? <Shimmer /> : <div className="res-container">
                <ResCard list={list} />
            </div>}
        </div>
    )
}


export default Body