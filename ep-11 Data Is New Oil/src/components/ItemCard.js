import { MENU_URL_IMG } from "../assets/link";

const ItemCard = ({itemCards}) => {
  return itemCards.map((item)=>{
  const itemInfo=item.card.info
  return <div key={itemInfo.id} className="w-6/12 border-gray-300 border-1 my-1 mx-auto py-1 shadow-lg flex justify-between px-4 rounded-2xl bg-slate-100" >
        <div className="items-end w-9/12 mr-1">
         <h4 className="mx-3 my-1 text-lg font-bold">{itemInfo.name.length > 20 ? itemInfo.name.substring(0, 20) + "..." : itemInfo.name}</h4>
        <h5 className="mx-3 my-1 text-base font-medium"><span> {(itemInfo.ratings.aggregatedRating.rating) && `${itemInfo.ratings.aggregatedRating.rating} ⭐ -`}  </span> ₹{itemInfo.defaultPrice / 100 || itemInfo.price / 100} </h5>
        <p className="mx-3 my-1 font-light text-sm text-slate-600">{(itemInfo.description && itemInfo.description.length) > 100 ? itemInfo.description.substring(0, 100) + "..." : itemInfo.description}</p> 
        </div> 
        <div className="w-3/12 flex flex-wrap justify-center">
          <img className="w-40 h-20 my-1 rounded-xl" src={MENU_URL_IMG + itemInfo.imageId} alt="food.jpg" />
          <button className="border-2 border-gray-600 py-1 px-2 rounded-xl mb-1 text-slate-600 cursor-pointer text-sm hover:bg-gray-300">Add +</button>
        </div>
        
    </div>})

  
}

export default ItemCard