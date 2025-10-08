const Contact=()=>{
return (
            <div className="body-container m-2 p-2">
                <h1 className="m-2 font-bold text-xl">Contact Us</h1>
                <form >
                    <input type="text" placeholder="name" className="border-1 border-black m-2 block rounded-sm p-2"/>
                    <textarea type="text" placeholder="message" className="border-1 border-black m-2 block rounded-sm p-2"/>
                    <button className="bg-black text-white p-2 rounded-lg m-2">Submit</button>
                </form>
            </div>
)
}

export default Contact