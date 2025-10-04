import { MENU_URL_IMG } from "../assets/link";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";

const ItemCard = ({ itemCards }) => {

  const dispatch=useDispatch();
  const handleAddItem=(item)=>{
    dispatch(addItem(item))
  }


  return itemCards.map((item) => {
    const itemInfo = item.card.info
    return <div key={itemInfo.id} className="w-6/12 border-gray-300 border-1 my-1 mx-auto py-1 shadow-lg flex justify-between px-4 rounded-2xl bg-gray-200/30" >
      <div className="items-end w-9/12 mr-1">
        <h4 className="mx-3 my-1 text-lg font-bold">{itemInfo.name.length > 40 ? itemInfo.name.substring(0, 40) + "..." : itemInfo.name}</h4>
        <h5 className="mx-3 my-1 text-base font-medium"><span> {(itemInfo.ratings.aggregatedRating.rating) && `${itemInfo.ratings.aggregatedRating.rating} ⭐ -`}  </span> ₹{itemInfo.defaultPrice / 100 || itemInfo.price / 100} </h5>
        <p className="mx-3 my-1 font-light text-sm text-slate-600">{itemInfo.description ? (itemInfo.description.length > 200 ? itemInfo.description.substring(0, 200) + "..." : itemInfo.description):"[ No-Description... ]"}</p>
      </div>
      <div className="w-3/12 flex flex-wrap justify-center">
          <img className="w-40 h-25 my-1 rounded-xl" src={MENU_URL_IMG + itemInfo.imageId} alt="food.jpg" />
          <div>
            <button className="bg-black text-white py-2 px-3 rounded-xl mb-1 cursor-pointer text-sm border-slate-300 border-2 shadow-lg hover:bg-gray-800" onClick={()=>handleAddItem(item)}>Add +</button>
        </div>
      </div>
    </div>
  })


}

export default ItemCard