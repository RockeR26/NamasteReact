import { RES_IMAGE_URL } from "../assets/link";
const ResCard=({resInfo})=>{
  const {name,avgRating,sla,cuisines,areaName,cloudinaryImageId}={...resInfo}
  const cuisineLength=[cuisines].join(",").length;
  const nameLength=name.length

  
 return(
  <div className="res-card">
    <img className="res-image" src={RES_IMAGE_URL+cloudinaryImageId} alt="food" />
    <h3 className="res-name res-card-text">{nameLength>15?name.substring(0,15)+"..." : name}</h3>
    <h4 className="res-rating res-card-text">{avgRating}⭐</h4>
    <h4 className="res-deliverytime res-card-text">{sla.slaString} </h4>
    <h5 className="res-cuisine res-card-text">{cuisineLength>25?[cuisines].join(",").substring(0,25) + "...":[cuisines].join(",")}</h5>
    <h5 className="res-location res-card-text">{areaName}</h5>
  </div>
 ) 
}

export default ResCard