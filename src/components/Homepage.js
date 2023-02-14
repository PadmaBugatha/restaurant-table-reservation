import React from "react";
import "./Homepage.css";
import AboutLittleLemon from "./AboutLittleLemon";
import BookingPage from "./BookingPage";
import CallToAction from "./CallToAction";
import Hero from "./Hero";
import Specials from "./Specials";
const Homepage = () => {
  return (
    <>
      <Hero />
      <Specials />
      <CallToAction />
      <BookingPage />
      <AboutLittleLemon />
    </>
  );
};

export default Homepage;
//  web app's homepage layout:

// Nav (the top-level navigation of the website, sometimes referred to as the navbar)

// CallToAction (sometimes referred to as the jumbotron or the hero, this component is the call-to-action section that guides the user to click a call-to-action button while enticing them to do so in as few words as possible)

// Homepage (the component for the homepage)

// Specials (the component that loops over the specials that come from a data source)

// CustomersSay (testimonials, including star ratings, customer images and customer details)

// Chicago (the component that describes the Little Lemon Chicago restaurant and gives a short backstory for it)

// BookingPage (the component for the table reservations page)
