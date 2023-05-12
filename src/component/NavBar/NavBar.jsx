import "./NavBar.css";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function NavBar() {
  return (
    <>
      <nav>
        <img src="./src/assets/icons/mainlogo.svg" />
        <Link to="/">
          <Button type={"primary"}>Accueil</Button>
        </Link>
      </nav>
    </>
  );
}
