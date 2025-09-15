import ResCard from "./ResCard"
import { useContext, useState } from "react"
import { URL } from "../assets/link"
import Shimmer from "./Shimmer"
import useFetch from "../assets/useFetch"
import UserContext from "../context/UserContext"


const Body = () => {
    const [text, setText] = useState("");
    const [top5, setTop5] = useState(false);
    const data = useFetch(URL);
    const {user,setUser}=useContext(UserContext)
    const resList = data?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants
    const filteredList = resList && resList.filter(res => res.info.name.toLowerCase().includes(text.toLowerCase()) || res.info.cuisines.join(',').toLowerCase().includes(text.toLowerCase()))
    const list = top5 ? filteredList.sort((a, b) => b.info.avgRating - a.info.avgRating).slice(0, 5) : filteredList



    return (
        <div className="container ">
            <div className="flex my-6 justify-around">
                <div className="search">
                    <input type="text" className="py-2 px-4 rounded-3xl border-1 border-gray-400" value={text} onChange={(e) => setText(e.target.value)} placeholder="Search                          🔍" />
                </div>
                <div>
                    <button className="login w-50 text-lg bg-orange-500 py-2 shadow-xl border-gray-300 border-2 rounded-3xl hover:bg-orange-300 cursor-pointer text-slate-200" onClick={() => setTop5(!top5)} style={{ backgroundColor: top5 && 'black' }}>Top 5 Restuarants</button>
                </div>
                <div>
                    <input type="text" className="border-1 border-black" value={user} onChange={(e)=>setUser(e.target.value)}/>
                </div>
            </div>
            {(resList === undefined) ? <Shimmer /> : <div className="flex flex-wrap my-4 mx-2 ml-10 gap-5">
                <ResCard list={list} />
            </div>}
        </div>
    )
}


export default Body