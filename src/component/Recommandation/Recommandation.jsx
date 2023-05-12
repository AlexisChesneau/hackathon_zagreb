import './Recommandation.css';

export default function Recommandation() {
  return (
    <div className="recommandation">
      <div className="container">
        <img
          className="logo"
          src="./src/assets/icons/healthlogo.svg"
          alt="logo"
        />
        <h2>Conseils vacances pour être paré(e)s a toutes éventualités</h2>
        <div className="bloc-p">
          <div className="conseilpollen">
            <img src="./src/assets/icons/pollenlogo.svg" />
            <p>
              <b>Pollen :</b> Se mettre les doigts dans le nez
              <br />
              Ne pas brouter les pissenlits
              <br />
              Porter des lunettes de plongé (même pour aller à la boulangerie)
            </p>
          </div>
          <div className="conseilpluie">
            <img src="./src/assets/icons/rainlogo.svg" />
            <p>
              <b>Pluie :</b> Mettre les pneues pluie
              <br />
              <b>En profiter pour prendre sa douche</b>
            </p>
          </div>
          <div className="conseilsoleil">
            <img src="./src/assets/icons/sunlogo.svg" />
            <p>
              <b>Soleil :</b>Se badigeonner le corps de beurre salé
            </p>
          </div>
          <div className="conseilincendie">
            <img src="./src/assets/icons/firelogo.svg" />
            <p>
              <b>Incendie :</b> Eviter le Fouquet's
              <br />
              <b />
              Ne pas suivre la maman de Bambie
            </p>
          </div>
          <div className="dernierConseil">
            <img src="./src/assets/icons/cranelogo.svg" alt="logo crane" />
            <p>
              <b>Pollution :</b> Se mettre un sac plastique autour de la tête
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
