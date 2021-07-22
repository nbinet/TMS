import { Link } from "react-router-dom";
import "./MapBuilding.scss"
import arrow from "../../assets/svgs/leftarrow.svg";

export const MapBuilding = () => {
  return(
    <div className="MapBuilding">
      <img 
      src= {arrow}
      alt= "flèche retour" >
      </img>
      <div className="Container">
      <Link to ='/'>
          <div className="building 1">Batiment A</div>
          <div className="building 2">Batiment B</div>
          <div className="building 3">Batiment C</div>
          <div className="building 4">Batiment D</div>
          <div className="building 5">Batiment E</div>   
      </Link>
      </div>
    </div>
  )
} 