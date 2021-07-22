import { MapInteractionCSS } from "react-map-interaction";
import plop from "../../../assets/plansPNG/batCamphA.png";

export const batAamphiA = () => {
  return (
    <div style={{ height: "120%" }}>
      <MapInteractionCSS>
        <img src={plop} />
      </MapInteractionCSS>
    </div>
  );
};
