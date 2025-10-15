import { RES_IMAGE_URL } from "../assets/link";

const ResCardInfo = ({resInfo}) => {
      const { name, avgRating, sla, cuisines, areaName, cloudinaryImageId, id } = resInfo
      const cuisineLength = [cuisines].join(",").length;
      const nameLength = name.length
  return (
    <div data-testid="resCard">
        <div className="w-70 h-80 bg-slate-200 hover:bg-gray-300 my-5 rounded-2xl shadow-2xl border-1 border-gray-200" >
          <img className="w-64 h-40 my-2 mx-3 rounded-xl" src={RES_IMAGE_URL + cloudinaryImageId} alt="food" />
          <h3 className="mx-3 mt-1 font-bold">{nameLength > 15 ? name.substring(0, 15) + "..." : name}</h3>
          <h4 className="mx-3  font-medium">{avgRating}⭐</h4>
          <h4 className="mx-3 font-medium">{sla.slaString} </h4>
          <h5 className="mx-3 mt-1 font-light text-slate-600">{cuisineLength > 25 ? [cuisines].join(",").substring(0, 25) + "..." : [cuisines].join(",")}</h5>
          <h5 className="mx-3 font-light  text-slate-600">{areaName}</h5>
        </div>
    </div>
  )
}

export default ResCardInfo