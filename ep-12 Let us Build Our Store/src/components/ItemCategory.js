
import { useState } from "react";
import ItemCard from "./ItemCard";

const ItemCategory = ({ rawResMenu }) => {
    const [openID,setOpenID]=useState(0);
    const categories = rawResMenu.filter((category)=>category?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    return categories.map((category,index)=>{
    const categoryItem=category?.card?.card
    const isOpen=openID===index
    

    return <div key={categoryItem.categoryId} >
        <div onClick={()=>{setOpenID((prev)=>prev===index?null:index)}}  className="w-6/12 border-gray-300 border-2 mt-4 mx-auto py-2 shadow-xl flex justify-between px-4 cursor-pointer">
        <span className="font-bold text-lg">{categoryItem.title} ({categoryItem.itemCards.length})</span>
        <span >🔻</span>
        </div>
        {isOpen &&<div>
         <ItemCard itemCards={categoryItem.itemCards}/>
        </div>}
    </div>

})
}
export default ItemCategory;
