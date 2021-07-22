import "./roombuilding.scss";
import arrow from "../../assets/svgs/leftarrow.svg";
import { Link } from "react-router-dom";
export const RoomBuilding = () => {
  return (
    <div className="RoomBuilding">
      <Link to="/mapbuilding">
        <img
          className="arrow"
          src={arrow}
          alt="flèche retour"
          style={{ margin: "30px 0 0px 30px" }}
        ></img>
      </Link>
      <p className="roombuilding_title">Bat.A</p>
      <select name="floor" id="floor select">
        <option value="floor">R.D.C</option>
        <option value="floor1">Etage 1</option>
        <option value="floor2">Etage 2</option>
        <option value="floor3">Etage 3</option>
      </select>

      <div className="Container_roombuilding">
        <div className="stairs">Escaliers</div>
        <div className="Container_room">
          <button className="room room_1">A001</button>
          <button className="room room_2">A002</button>
          <button className="room room_3">A003</button>
        </div>
        <Link to="/batAamphiA">
          <button className="amph amph1">Amphi A</button>
        </Link>
        <span className="door"></span>
      </div>
    </div>
  );
};
