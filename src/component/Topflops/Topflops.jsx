import './Topflops.css';

export default function TopFlops() {
  return (
    <div className='topflop'>
      <h1>Les Tops</h1>

      <div className="container1">
        <h2>Bjornoya</h2>
        <img
          src="../src/assets/images/Bjornoya.jpg"
          alt="Photo de Bjornoya"
        ></img>
      </div>

      <div className="container2">
        <h2>Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson</h2>
      <img
          src="../src/assets/images/Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson.jpeg"
          alt="Photo de Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson"
        ></img>
      </div>
      
      <h1>Les Flops</h1>

      <div className="container3">
        <h2>Hum</h2>
        <img
          src="../src/assets/images/Hum.jpeg"
          alt="Photo de Hum"
        ></img>
      </div>
      
      <div className="container4">
        <h2>Paris</h2>
      <img
          src="../src/assets/images/Paris.webp"
          alt="Photo de Paris"
        ></img>
      </div>
    </div>
  );
}
