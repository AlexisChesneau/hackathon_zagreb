import './Topflops.css';

export default function TopFlops() {
  return (
    <div className="topflop">
      <div className="top">
        <h1>Destinations conseillées</h1>
      </div>
      <div className="topville">
        <div className="container1">
          <div className="image-bjornoya">
            <h2>Bjornoya</h2>
            <img
              src="../src/assets/images/Bjornoya.jpg"
              alt="Photo de Bjornoya"
            ></img>
          </div>
          <p>
            Discrète et loin de tout,
            <br /> vous ne serez pas ennuyé par le pollen et la pollution.
          </p>
        </div>

        <div className="container2">
          <div className="image-remy">
            <h2>Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson</h2>
            <img
              src="../src/assets/images/Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson.jpeg"
              alt="Photo de Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson"
            ></img>
          </div>
          <p>
            Si petit village que même la pluie ne le trouve pas.
            <br /> Si vous avez la chance de tomber dessus par hasard, restez-y
            !
          </p>
        </div>
      </div>

      <div className="flop">
        <h1>Zone à risques de contact avec allergènes fort</h1>
      </div>
      <div className="flopville">
        <div className="container3">
          <div className="image-hum">
            <h2>Hum</h2>
            <img src="../src/assets/images/Hum.jpeg" alt="Photo de Hum"></img>
          </div>
          <p>
            20 habitants, 42 degrés en plein soleil tous les étés,
            <br /> pas intérêt d'y arriver sans son chargeur de téléphone.
          </p>
        </div>

        <div className="container4">
          <div className="image-paris">
            <h2>Paris</h2>
            <img
              src="../src/assets/images/Paris.png"
              alt="Photo de Paris"
            ></img>
          </div>
          <p>Les parisiens.</p>
        </div>
      </div>
    </div>
  );
}
