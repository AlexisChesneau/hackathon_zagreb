import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <Link to="/">
          <button>Accueil</button>
        </Link>
        <img src="./src/assets/icons/mainlogo.svg" />
      </nav>
    </>
  );
}
