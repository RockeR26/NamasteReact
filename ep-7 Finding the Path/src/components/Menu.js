import { useEffect, useState } from "react";
import { MENU_URL_IMG, URL_MENU } from "../assets/link";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const Menu=()=>{
        const {resID}=useParams();
        const [menu,setMenu]=useState([]);
        const [info,setInfo]=useState(null);

        
        useEffect(() => {
            fetchData(URL_MENU+resID);
            
        }, [])
    
        const fetchData = async (url) => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                const resInfo = data?.data?.cards[2]?.card?.card?.info
                const rawResMenu=data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
                const filteredResMenu=rawResMenu.filter((item)=>item?.card?.card?.title&&item?.card?.card?.title.includes("Recommended"))
                const resMenu=filteredResMenu[0]?.card?.card?.itemCards
                setInfo(resInfo);
                setMenu(resMenu);

            } catch (error) {
                console.error(error);
            }
    
        }

    return(
    <div className="body-container">
       {(info===null)?(<Shimmer/>):(<>
        <div className="menu-header">
            <div>
            <h1 className="menu-title">{info.name}</h1>
            <h3 className="menu-title-info"><span>{info.avgRating}⭐ </span> - {info.costForTwoMessage}</h3>
            <h4 className="menu-title-info">{info.cuisines.join(" , ")}</h4>
            <h4 className="menu-title-info">{info.locality} -  {info.areaName}</h4>
            <h4 className="menu-title-info">Delivered in {info.sla.deliveryTime} Mins</h4>
            </div>
        </div>
        <div className="menu-item-container res-container">
        {menu.map((item)=>{
            const itemInfo=item.card.info
           return <div className="menu-item res-card" key={itemInfo.id}>
            <img className="menu-image" src={MENU_URL_IMG+itemInfo.imageId} alt="food.jpg" />
            <h4 className="menu-info">{itemInfo.name.length>20?itemInfo.name.substring(0,20)+"..." : itemInfo.name}</h4>
            <h5 className="menu-info">₹ {itemInfo.defaultPrice/100||itemInfo.price/100}</h5>
            <p className="menu-info">{itemInfo.description.length>100?itemInfo.description.substring(0,100)+"..." : itemInfo.description}</p>
        </div>})}
        </div>
        </>)}
    </div>

    )
}

export default Menu;