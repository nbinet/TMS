
import facebook from "../../assets/icones/facebook.svg";
import twitter from "../../assets/icones/twitter.svg";
import instagram from "../../assets/icones/instagram.svg";
import linkedin from "../../assets/icones/linkedin.svg";
import "./FooterComponent.scss";

export const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="adress">
        <p>Université Paris Nanterre</p>
        <p>200 avenue de la République</p>
        <p>92001 Nanterre Cedex</p>
        <p>01 40 97 72 00</p>
        <p>www.parisnanterre.fr</p>
      </div>
      <div className="bottom">
        <div className="infos">
          <p>Infos pratiques</p>
          <p>Mentiens légales</p>
        </div>
        <div className="social">
          <p>Suivez-nous sur</p>
          <div className="logos">
            <img className="img" src={facebook} alt="Logo Facebook" />
            <img className="img" src={twitter} alt="Logo Twitter" />
            <img className="img" src={instagram} alt="Logo Instagram" />
            <img className="img" src={linkedin} alt="Logo Linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
};
