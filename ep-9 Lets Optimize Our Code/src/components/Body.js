import ResCard from "./ResCard"
import { useEffect, useState } from "react"
import { URL } from "../assets/link"
import Shimmer from "./Shimmer"
import {Link} from "react-router"
import useFetch from "../assets/useFetch"


const Body = () => {
    const [top5, setTop5] = useState(false);
    const [text, setText] = useState("");

    const data2=useFetch(URL);
    const resData2=data2?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants
    console.log(resData2)
    const list=resData2;
    let resList=resData2;




    const handleFilter = () => {
        if (!top5) {
            const top5 = list.sort((a, b) => b - a).slice(0, 5)
            const filetredSort = list.filter((res) => top5.includes(res)).sort((a, b) => b.info.avgRating - a.info.avgRating)
            
            setTop5(true);
        } else {
            resList=list;
            setTop5(false);
        }
    }
    const handleSearch = () => {
        const filtered = list.filter(res => res.info.name.toLowerCase().includes(text.toLowerCase()) || res.info.cuisines.join(',').toLowerCase().includes(text.toLowerCase()))
        resList=filtered
    }



    return (
        <div className="body-container">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-text" value={text} onChange={(e) => setText(e.target.value)} />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <button onClick={handleFilter} style={{ backgroundColor: top5 && 'lightgrey' }}>Top 5 Restuarants</button>
            </div>
            {(resList === undefined) ? <Shimmer /> : <div className="res-container">
                {resList.map((res) => <Link to={"/restaurants/"+res.info.id} key={res.info.id}><ResCard resInfo={res.info} /></Link>)}
            </div>}
        </div>
    )
}


export default Body