// import { Link, Route, Routes } from "react-router-dom";
import logo from "./images/logo.png";
import "./Navigation.css";
import { Link } from "react-router-dom";
// import AboutLittleLemon from "./AboutLittleLemon";
// import Specials from "./Specials";
// import BookingPage from "./BookingPage";
// import CallToAction from "./CallToAction";
// import Homepage from "./Homepage";

const Navigation = () => {
  return (
    <div className="navigate-bar">
      <header className="header-style">
        <img className="logo" src={logo} width="150" height="auto" alt="logo" />
        <nav>
          <Link to="/" className="nav-item">
            Homepage
          </Link>
          <Link to="/specials" className="nav-item">
            Specials
          </Link>
          <Link to="/reservetable" className="nav-item">
            ReserveTable
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
          <Link to="/cta" className="nav-item btun">
            Try for free
          </Link>
        </nav>
      </header>

      {/* <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/specials" element={<Specials />}></Route>
        <Route path="/cta" element={<CallToAction />}></Route>
        <Route path="/reservetable" element={<BookingPage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<AboutLittleLemon />}></Route>
      </Routes> */}
    </div>
  );
};

export default Navigation;
