import { MENU_URL_IMG } from "../assets/link";

const ItemCard = ({ rawResMenu }) => {
    const filteredResMenu = rawResMenu.filter((item) => (item?.card?.card?.title && (!item?.card?.card?.carousel)) && (item?.card?.card?.title.includes("Recommended") || item?.card?.card?.title))
    const menu = filteredResMenu[0]?.card?.card?.itemCards || filteredResMenu[0]?.card?.card?.categories[0].itemCards


    return menu.map((item)=>{
    const itemInfo=item.card.info;
    return <div className="menu-item res-card" key={itemInfo.id}>
        <img className="menu-image" src={MENU_URL_IMG + itemInfo.imageId} alt="food.jpg" />
        <h4 className="menu-info">{itemInfo.name.length > 20 ? itemInfo.name.substring(0, 20) + "..." : itemInfo.name}</h4>
        <h5 className="menu-info"><span> {(itemInfo.ratings.aggregatedRating.rating) && `${itemInfo.ratings.aggregatedRating.rating} ⭐ -`}  </span> ₹{itemInfo.defaultPrice / 100 || itemInfo.price / 100} </h5>
        <p className="menu-info">{(itemInfo.description && itemInfo.description.length) > 100 ? itemInfo.description.substring(0, 100) + "..." : itemInfo.description}</p>
    </div>
    })}



export default ItemCard;