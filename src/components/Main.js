import { Route, Routes } from "react-router-dom";

import "./Navigation.css";
import AboutLittleLemon from "./AboutLittleLemon";
import Specials from "./Specials";
import BookingPage from "./BookingPage";
import CallToAction from "./CallToAction";
import Homepage from "./Homepage";
// <Routes>
//   <Route path="/" element={<Homepage />}></Route>
//   <Route path="/specials" element={<Specials />}></Route>
//   <Route path="/cta" element={<CallToAction />}></Route>
//   <Route path="/reservetable" element={<BookingPage />}></Route>
//   <Route path="/about" element={<AboutLittleLemon />}></Route>
//   <Route path="/contact" element={<AboutLittleLemon />}></Route>
// </Routes>;

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/specials" element={<Specials />}></Route>
        <Route path="/cta" element={<CallToAction />}></Route>
        <Route path="/reservetable" element={<BookingPage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<AboutLittleLemon />}></Route>
      </Routes>
    </>
  );
};

export default Main;
