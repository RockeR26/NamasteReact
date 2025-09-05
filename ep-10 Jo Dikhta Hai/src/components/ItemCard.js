import { MENU_URL_IMG } from "../assets/link";

const ItemCard = ({ rawResMenu }) => {
    const filteredResMenu = rawResMenu.filter((item) => (item?.card?.card?.title && (!item?.card?.card?.carousel)) && (item?.card?.card?.title.includes("Recommended") || item?.card?.card?.title))
    const menu = filteredResMenu[0]?.card?.card?.itemCards || filteredResMenu[0]?.card?.card?.categories[0].itemCards


    return menu.map((item)=>{
    const itemInfo=item.card.info;
    return <div className="w-70 h-80 bg-slate-200 hover:bg-gray-300 my-5 rounded-2xl shadow-2xl border-1 border-gray-200" key={itemInfo.id}>
        <img className="w-64 h-40 my-2 mx-3 rounded-xl" src={MENU_URL_IMG + itemInfo.imageId} alt="food.jpg" />
        <h4 className="mx-3 my-1 font-bold">{itemInfo.name.length > 20 ? itemInfo.name.substring(0, 20) + "..." : itemInfo.name}</h4>
        <h5 className="mx-3 my-1 font-medium"><span> {(itemInfo.ratings.aggregatedRating.rating) && `${itemInfo.ratings.aggregatedRating.rating} ⭐ -`}  </span> ₹{itemInfo.defaultPrice / 100 || itemInfo.price / 100} </h5>
        <p className="mx-3 my-1 font-light text-slate-600">{(itemInfo.description && itemInfo.description.length) > 100 ? itemInfo.description.substring(0, 100) + "..." : itemInfo.description}</p>
    </div>
    })}



export default ItemCard;