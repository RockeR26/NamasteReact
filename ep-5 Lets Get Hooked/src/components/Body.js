import ResCard from "./ResCard"
import resList from "../assets/data"
import { useState } from "react"


const Body = () => {
    const [list, setList] = useState(resList);
    const [top5, setTop5] = useState(false)

    const handleClick = () => {
        if (!top5) {
            const top5 = list.sort((a, b) => b - a).slice(0, 5)
            const filetredSort = list.filter((res) => top5.includes(res)).sort((a, b) => b.info.avgRating - a.info.avgRating)
            setList(filetredSort);
            setTop5(true);
        }else{
            setList(resList);
            setTop5(false);   
        }
    }


    return (
        <div className="body-conatiner">
            <div className="filter">
                <button onClick={handleClick}>Top 5 Restuarants</button>
            </div>
            <div className="res-container">
                {list.map((res) => <ResCard resInfo={res.info} key={res.info.id} />)}
            </div>
        </div>
    )
}

export default Body