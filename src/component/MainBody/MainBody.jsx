import { useNavigate, Link } from "react-router-dom";
import "./MainBody.css";

export default function MainBody() {
  return (
    <div className="bloc-button">
      <div className="gauche">
        <Link to="/map">
          <button className="buttonmap">
            <h2>Nos conditions du jour</h2>
            <img
              src="../src/assets/icons/maplogo.svg"
              alt="icone de la carte"
            ></img>
          </button>

          <button className="buttonweather">
            <h2>Nos prévisions jusqu’à 5 jours</h2>
            <img
              src="../src/assets/icons/weatherlogo.svg"
              alt="icone de la météo"
            ></img>
          </button>
        </Link>
      </div>
      <div className="droite">
        <Link to="/top-flop">
          <button className="buttoncity">
            <h2>Les tops / flops villes de la semaine</h2>
            <img
              src="../src/assets/icons/citylogo.svg"
              alt="icone de ville"
            ></img>
          </button>
        </Link>
        <Link to="/conseil">
          <button className="buttontips">
            <h2>Nos conseils</h2>
            <img
              src="../src/assets/icons/healthlogo.svg"
              alt="icone de la santé"
            ></img>
          </button>
        </Link>
      </div>
    </div>
  );
}
