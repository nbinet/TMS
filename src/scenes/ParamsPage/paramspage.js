import "./paramspage.scss";
import { Link } from "react-router-dom";
import pp from "../../assets/pngs/pp.png";
import arrow from "../../assets/svgs/leftarrow.svg";
import heart from "../../assets/svgs/smallheart.svg";
import heartLiked from "../../assets/svgs/likedheart.svg";

function liked(e) {
  e.target.setAttribute("src", { heartLiked });
}
export const ParamsPage = () => {
  return (
    <div className="ParamsPage">
      <Link to="/home">
        <img
          className="arrow"
          src={arrow}
          alt="flèche retour"
          style={{ margin: "30px 0 0px 30px" }}
        ></img>
      </Link>
      <div className="profil_personal">
        <img className="profilpic" src={pp} alt="profil de l'utilisateur"></img>
        <p className="titletext personalname">Romane Danizelle</p>
        <p className="smalltext personal_info personalpec">
          UFR Sciences Sociales
        </p>
        <p className="smalltext personal_info personalbranch">
          Licence 3 Philosophie
        </p>
      </div>
      <div className="profil_preferences">
        <p className="titletext preferences_title">
          Votre historique de salles:
        </p>
        <ul className="container_preferences">
          <div className="group_preferences">
            <img src={heart} onClick="src={arrow}" alt="favoris"></img>
            <p className="smalltext preferences_lines">Amphi. A - Bat. A</p>
          </div>
          <div className="group_preferences">
            <img src={heart} onClick={liked} alt="favoris"></img>
            <p className="smalltext preferences_lines">Salle D302 - Bat. D</p>
          </div>
          <div className="group_preferences">
            <img src={heart} alt="favoris"></img>
            <p className="smalltext preferences_lines">Amphi. D - Bat. D</p>
          </div>
          <div className="group_preferences">
            <img src={heartLiked} alt="favoris"></img>
            <p className="smalltext preferences_lines">Salle A003 - Bat. A</p>
          </div>
          <div className="group_preferences">
            <img src={heart} alt="favoris"></img>
            <p className="smalltext preferences_lines">Salle E412 - Bat. E</p>
          </div>
        </ul>
      </div>
    </div>
  );
};
