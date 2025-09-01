import ResCard from "./ResCard"
import { useEffect, useState } from "react"
import { URL } from "../assets/link"
import Shimmer from "./Shimmer"
import {Link} from "react-router"


const Body = () => {
    const [list, setList] = useState([]);
    const [top5, setTop5] = useState(false);
    const [resList, setResList] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        fetchData(URL);
    }, [])

    const fetchData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            const resData = data?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants
            setList(resData);
            setResList(resData);
        } catch (error) {
            console.error(error)
        }

    }

    const handleFilter = () => {
        if (!top5) {
            const top5 = list.sort((a, b) => b - a).slice(0, 5)
            const filetredSort = list.filter((res) => top5.includes(res)).sort((a, b) => b.info.avgRating - a.info.avgRating)
            setResList(filetredSort);
            setTop5(true);
        } else {
            setResList(list);
            setTop5(false);
        }
    }
    const handleSearch = () => {
        const filtered = list.filter(res => res.info.name.toLowerCase().includes(text.toLowerCase()) || res.info.cuisines.join(',').toLowerCase().includes(text.toLowerCase()))
        setResList(filtered)
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
            {(resList.length === 0) ? <Shimmer /> : <div className="res-container">
                {resList.map((res) => <Link to={"/restaurants/"+res.info.id} key={res.info.id}><ResCard resInfo={res.info} /></Link>)}
            </div>}
        </div>
    )
}


export default Body