import "./roombuilding.scss"
import arrow from "../../assets/svgs/leftarrow.svg";
import { Link } from "react-router-dom";
export const RoomBuilding= ()=> {
	return(
		<div className="RoomBuilding">
			<img className="arrow" 
      src= {arrow}
      alt= "flèche retour" >
      </img>
			<p className="roombuilding_title mobile" >Bat.A</p>
			<p className="roombuilding_title desktop" >Batiment A</p>
			<select name="floor" id="floor select">
   			<option value="floor">R.D.C</option>
    		<option value="floor1">Etage 1</option>
   			<option value="floor2">Etage 2</option>
				<option value="floor3">Etage 3</option>
			</select>

			<div className="Container_roombuilding"> 
				<div className="stairs" >Escaliers</div>
				<div className="Container_room">
					<button className="room room_1" ><Link to ="/roompage" className="buildlink">A001</Link></button>
					<button className="room room_2" ><Link to ="/roompage" className="buildlink">A002</Link></button>
					<button className="room room_3" ><Link to ="/roompage" className="buildlink">A003</Link></button>
					</div>	
				<button className="amph amph1">Amphi A</button>
				<span className="door"></span>
			</div>
		</div>
	)
}