import "./MainBody.css";

export default function MainBody() {
  return (
    <div className="bloc-button">
      <div className="gauche">
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
      </div>
      <div className="droite">
        <button className="buttoncity">
          <h2>????</h2>
          <img
            src="../src/assets/icons/citylogo.svg"
            alt="icone de ville"
          ></img>
        </button>
        <button className="buttontips">
          <h2>Nos conseils</h2>
          <img
            src="../src/assets/icons/healthlogo.svg"
            alt="icone de la santé"
          ></img>
        </button>
      </div>
    </div>
  );
}
