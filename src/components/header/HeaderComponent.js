import { Link } from "react-router-dom";
import home from "../../assets/icones/home.svg";
import "./HeaderComponent.scss";

export const HeaderComponent = () => {
  return (
    <div className="header">
      <Link to="/login">
        <img alt="login" className="img" src={home} />
      </Link>
    </div>
  );
};
