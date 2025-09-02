import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import ItemCard from "./ItemCard";
import { URL_MENU } from "../assets/link";
import useFetch from "../assets/useFetch";

const Menu = () => {
    const { resID } = useParams();
    const data=useFetch(URL_MENU+resID);
    const info=data?.data?.cards[2]?.card?.card?.info
    const rawResMenu2 = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;

    
    return (
        <div className="body-container">
            {(info===undefined) ? (<Shimmer />) : (<>
                <div className="menu-header">
                    <div>
                        <h1 className="menu-title">{info.name}</h1>
                        <h3 className="menu-title-info"><span>{info.avgRating} ⭐ </span> - {info.costForTwoMessage}</h3>
                        <h4 className="menu-title-info">{info.cuisines.join(" , ")}</h4>
                        <h4 className="menu-title-info">{info.locality} -  {info.areaName}</h4>
                        <h4 className="menu-title-info">{(info.sla.deliveryTime) && `Delivered in ${info.sla.slaString.toLowerCase()}`}</h4>
                    </div>
                </div>
                <div className="menu-item-container res-container">
                    {(rawResMenu2!==undefined) && <ItemCard rawResMenu={rawResMenu2} />}
                </div>
            </>)}
        </div>

    )
}

export default Menu;
