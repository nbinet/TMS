import home from "../../assets/icones/home.svg";
import { Link } from "react-router-dom";
export const HeaderComponent = () => {
  return (
    <div style={{ 
      backgroundColor: "#3238BA", 
      height:"10vh"
    }}>
      <Link to ="/login"><img src={home} alt= "Bouton d'accueil " style= {{
        position:"absolute",
        top:"3%",
        left:"5%"
      }}/>
      </Link>
    </div>
  );
};
