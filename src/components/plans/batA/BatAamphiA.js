import { MapInteractionCSS } from "react-map-interaction";
import plansvg from "../../../assets/plansPNG/plan.svg";
import bigheart from "../../../assets/icones/bigheart.svg";
import details from "../../../assets/icones/details.svg";
import "./BatAamphiA.scss";

export const batAamphiA = () => {
  return (
    <div className="pageAmphi">
      <p className="textAmphi">Amphi. A</p>
      <p className="textBat">Bat. A</p>
      <MapInteractionCSS className="amphi">
        <div className="amphi">
          <img alt="plansvg" src={plansvg} />
        </div>
      </MapInteractionCSS>
      <div className="dflex">
        <img alt="bigHeart" className="img" src={bigheart} />
        <p>Mettre en favoris</p>
      </div>
      <div className="dflex">
        <img alt="details" className="img" src={details} />
        <p>Afficher la légende</p>
      </div>
    </div>
  );
};
