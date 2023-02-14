import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer>
        <menu>
          <li className="img-footer">
            <img
              src={require("./images/footer-logo.png")}
              alt="Little Lemon logo"
            ></img>
          </li>
          <li className="contact">
            <h1 className="footer-header">Navigation</h1>
            <ul className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              {/* <a
              href={require("./images/footer-logo.png")}
              target="_blank"
              rel="noreferrer"
            >
              Menu
            </a> */}
              <Link to="/reservations">Reservations</Link>
              <Link to="/specials">Order</Link>
              <Link to="/cta">Login</Link>
            </ul>
          </li>

          <li>
            <h1 className="footer-header">Contact</h1>
            <ul className="footer-links">
              <li>2395 Maldove Way,</li>
              <li>Chicago Illinois</li>
              <br></br>
              <li>(629)-243-6827</li>
              <br></br>
              <a
                href="mailto: info@littlelemon.com"
                target="_blank"
                rel="noreferrer"
              >
                info@littlelemon.com
              </a>
            </ul>
          </li>
          <li>
            <h1 className="footer-header">Connect</h1>
            <ul className="footer-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Join us!
              </a>
            </ul>
          </li>
        </menu>
      </footer>

      <div className="button">
        <a href="/">
          {/* <FontAwesomeIcon icon="fa-solid fa-arrow-up" /> */}
          <i class="fas fa-arrow-up"></i>
        </a>
      </div>
    </>
  );
}
