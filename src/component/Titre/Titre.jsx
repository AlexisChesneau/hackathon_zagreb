import './Titre.css';

export default function Titre() {
  return (
    <div className="titre">
      <img
        className="img"
        src="./image/image_vacances.png"
        alt="image_header"
      />
      <h1 className="h1">Osez sortir sans mouchoir</h1>
      <p className="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}
