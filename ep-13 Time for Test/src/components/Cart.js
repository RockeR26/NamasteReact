import { useDispatch, useSelector } from "react-redux"
import ItemCard from "./ItemCard";
import { Link } from "react-router";
import { clearCart } from "../Redux/cartSlice";

const Cart = () => {

const items=useSelector((store)=>store.cart.items);
const dispatch = useDispatch();
const handleClearCart=()=>{
  dispatch(clearCart());
}


  return (
    <div className="mb-8">
        <h1 className="text-xl font-bold border-2 border-gray-300 rounded-2xl mx-40 my-8 text-center py-4 shadow-xl"> My Cart 🛒 </h1>
        {(items.length>0)?<ItemCard itemCards={items}/> :<div><h1 className="text-lg font-medium text-center text-slate-500"> No Items in Cart ☹️ ... </h1></div> }
        <div className="flex mt-8 justify-center gap-8">
        {items.length>0&&<button className="login w-2/12 text-lg text-slate-200 bg-orange-500 py-2 shadow-xl border-gray-300 border-2 rounded-3xl hover:bg-orange-300 cursor-pointer" onClick={handleClearCart}>Clear Cart 🗑️</button>}
        <button className="login w-3/12 text-lg text-slate-200 bg-orange-500 py-2 shadow-xl border-gray-300 border-2 rounded-3xl hover:bg-orange-300 cursor-pointer"> <Link to="/"> Explore More Items 🍔 </Link></button>
        </div>
    </div>
)
}

export default Cart