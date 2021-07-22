import { Link } from "react-router-dom";
import home from "../assets/icones/home.svg";
import facebook from "../assets/icones/facebook.svg";
import twitter from "../assets/icones/twitter.svg";
import instagram from "../assets/icones/instagram.svg";
import linkedin from "../assets/icones/linkedin.svg";

export const HeaderComponent = () => {
  return (
    <div style={{ backgroundColor: "#3238BA" }}>
      <Link to="/Login">
        <img src={home} alt="Bouton d'accueil" />
      </Link>
    </div>
  );
};

export const FooterComponent = () => {
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
          color: "ffffff",
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
          <img src={facebook} alt="Logo Facebook" />
          <img src={twitter} alt="Logo Twitter" />
          <img src={instagram} alt="Logo Instagram" />
          <img src={linkedin} alt="Logo Linkedin" />
        </div>
      </div>
    </div>
  );
};
