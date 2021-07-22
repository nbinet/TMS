import { Link } from "react-router-dom";
import "./mapbuilding.scss"
import arrow from "../../assets/svgs/leftarrow.svg";


export const MapBuilding = () => {
  return(
    <div className="MapBuilding">
      <img className="arrow" 
      src= {arrow}
      alt= "flèche retour" >
      </img>
      <p className="MapBuilding_title desktop"> Vous souhaitez</p>
      <p className="MapBuilding_title mobile">Choissisez votre bâtiment</p>
      <div className="Container">
        <button className="building b1"><Link to ="./roombuilding">Bat.A</Link></button>
        
        <button className="building b2"><Link to ="./roombuilding">Bat.B</Link></button>
    
        <button className="building b3"><Link to ="./roombuilding">Bat.C</Link></button>
      
        <button className="building b4"><Link to ="./roombuilding">Bat.D</Link></button>
      
        <button className="building b5"><Link to ="./roombuilding">Bat.E</Link></button>
      
        <button className="building b6"><Link to ="./roombuilding">Bat.F</Link></button>
      
        <button className="building b7"><Link to ="./roombuilding">Bat.G</Link></button>     
      
        <button className="building b7 hidden" style={{opacity:0}
        }></button>     
      
        <button className="building r1"></button>     
      
        <button className="building r2"></button>     
      
        <button className="building r3"></button>     
      
        <button className="building r4"></button>     
    
        <button className="building r5">BU</button>     
      
        <button className="building r6"></button>     
      
        <button className="building r7">Restaurant.U</button>     
      


      </div>
    </div>
  )
} 