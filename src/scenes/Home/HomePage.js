import { Link } from "react-router-dom";
import Mapicon from "../../assets/svgs/MapIcon.svg";
import Params from "../../assets/svgs/ParametresIcon.png";
import Seats from "../../assets/svgs/SeatsIcon.svg";
import  "./homepage.css";
import Button from "@material-ui/core/Button";

export const  HomePage = () => {
    return(
        <section className="HomePage">
            <span>Bonjour Romain</span>
            <span><strong>Vous souhaitez ?</strong></span>
            <div className="selection-container">
                <div className="selection-content">
                    <img src={Seats} className="Home-icone" alt="Sièges" />
                    <Button to ='/MapBuilding'
                        type="submit"
                        variant="contained"
                        color="secondary"
                        >
                        Trouver votre siège
                    </Button>
                </div>
                
                <div className="selection-content">
                    <img src={Mapicon} className="Home-icone" alt="Carte" />
                    <Button to ='/MapBuilding'
                        type="submit"
                        variant="contained"
                        color="secondary"
                        >
                        Chercher une salle
                    </Button>
                </div>
                
                <div className="selection-content">
                    <img src={Params} className="Home-icone" alt="Engrenages" />
                    <Button to ='/MapBuilding'
                        type="submit"
                        variant="contained"
                        color="secondary"
                        >
                        Accéder à vos paramètres
                    </Button>
                </div>               
            </div>
        </section>
    )
}