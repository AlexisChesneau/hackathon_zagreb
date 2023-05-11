import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <img
          className="charo"
          src="./src/assets/icons/copyright.svg"
          alt="copyright"
        />
        <div className="pouloulou">
          <div className="reseau">
            <img src="./src/assets/icons/facebook.svg" alt="A" />

            <img src="./src/assets/icons/instagram.svg" alt="B" />

            <img src="./src/assets/icons/twitter.svg" alt="C" />
          </div>
        </div>
      </footer>
    </>
  );
}
