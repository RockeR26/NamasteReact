import { Link } from "react-router";
import ResCardInfo from "./ResCardInfo";
import vegResCard from "./vegRescard";



const ResCard = ({ list }) => {
  const VegCard=vegResCard(ResCardInfo)
  return (
    list.map((res) => {
      return <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
          {(res?.info?.veg)?<VegCard resInfo={res.info}/>:<ResCardInfo resInfo={res.info}/>}
      </Link>
    })

  )
}

export default ResCard



