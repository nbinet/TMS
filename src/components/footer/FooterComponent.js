import { Link } from "react-router-dom";
import facebook from "../../assets/icones/facebook.svg";
import twitter from "../../assets/icones/twitter.svg";
import instagram from "../../assets/icones/instagram.svg";
import linkedin from "../../assets/icones/linkedin.svg";
import { link } from "fs";
// import { useTheme } from "@material-ui/core/styles";

export const FooterComponent = () => {
  // const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: "#3238BA",
        position: "fixed",
        bottom: "0",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>Université Paris Nanterre</span>
        <span>200 avenue de la République</span>
        <span>92001 Nanterre Cedex</span>
        <span>01 40 97 72 00</span>
        <span>www.parisnanterre.fr</span>
      </div>
      <div>
        <span>Infos pratiques</span>
        <span>Mentiens légales</span>
      </div>
      <div>
        <span>Suivez-nous sur</span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={facebook} />
          <img src={twitter} />
          <img src={instagram} />
          <img src={linkedin} />
        </div>
      </div>
    </div>
  );
};
