import './Topflops.css';

export default function TopFlops() {
  return (
    <div className="topflop">
      <div className="top">
        <h1>Les Tops</h1>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="flop">
        <h1>Les Flops</h1>
      </div>
      <div className="flopville">
        <div className="container3">
          <div className="image-hum">
            <h2>Hum</h2>
            <img src="../src/assets/images/Hum.jpeg" alt="Photo de Hum"></img>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
