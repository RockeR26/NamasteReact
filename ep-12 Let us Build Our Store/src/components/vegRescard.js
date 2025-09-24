import ResCardInfo from "./ResCardInfo";

const vegResCard=(ResCardInfo)=>{
    return (props)=>{
        return <div>
        <span className="absolute bg-black text-slate-200 p-2 rounded-xl text-sm mx-3 my-2">🌿 Veg</span>
        <ResCardInfo {...props}/>
        </div>
    }
}

export default vegResCard