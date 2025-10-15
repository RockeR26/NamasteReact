import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { URL_MENU } from "../assets/link";
import useFetch from "../assets/useFetch";
import ItemCategory from "./ItemCategory";


const Menu = () => {
    const { resID } = useParams();
    const data=useFetch(URL_MENU+resID);
    console.log(data);
    const info=data?.data?.cards[2]?.card?.card?.info
    const rawResMenu2 = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;

    
    return (
        <div className="container">
            {(info===undefined) ? (<Shimmer />) : (<>
                <div className="flex justify-center my-2 py-4 shadow-xl border-2 border-gray-300 rounded-2xl mx-6">
                    <div>
                        <h1 className="font-bold">{info.name}</h1>
                        <h3 className="font-medium"><span>{info.avgRating} ⭐ </span> - {info.costForTwoMessage}</h3>
                        <h4 className="font-medium text-slate-600">{info.cuisines.join(" , ")}</h4>
                        <h4 className="font-medium text-slate-600">{info.locality} -  {info.areaName}</h4>
                        <h4 className="font-medium text-slate-600">{(info.sla.deliveryTime) && `Delivered in ${info.sla.slaString.toLowerCase()}`}</h4>
                    </div>
                </div>
                <div className="my-10">
                    {(rawResMenu2!==undefined) && <ItemCategory rawResMenu={rawResMenu2} />}
                </div>
            </>)}
        </div>

    )
}

export default Menu;
