import "./paramspage.scss"
import { Link } from "react-router-dom"
import pp from "../../assets/pngs/pp.png";
import arrow from "../../assets/svgs/leftarrow.svg";
import heart from "../../assets/svgs/smallheart.svg"
export const ParamsPage = () => {
	return (
		<div className="ParamsPage">
			<img className="arrow" 
      src= {arrow}
      alt= "flèche retour" >
      </img>
			<div className="profil_personal">
				<img className="profilpic" src={pp} alt = "profil de l'utilisateur">
				</img>
				<p className="titletext personalname">Romane Danizelle</p>
				<p className="smalltext personal_info personalpec">UFR Sciences Sociales</p>
				<p className="smalltext personal_info personalbranch">Licence 3 Philosophie</p>	
			</div>
			<div className="profil_preferences">
				<p className="titletext preferences_title">Votre historique de salles:</p>
				<ul className ="container_preferences">
					<div className="group_preferences">
						<img src={heart} alt="favoris">
						</img><p className="smalltext preferences_lines">Amphi. A - Bat. A</p>
					</div>
					<div className="group_preferences">
					<img src={heart} alt="favoris">
					</img><p className="smalltext preferences_lines">Amphi. A - Bat. A</p>
					</div>
					<div className="group_preferences">
					<img src={heart} alt="favoris">
					</img><p className="smalltext preferences_lines">Amphi. A - Bat. A</p>
					</div>

				</ul>
			</div>
		</div>
	) 
}