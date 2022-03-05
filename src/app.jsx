import React from "react";
import "./app.css";

import NavBar from "./components/NavBar"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
    return (
      <>
        <NavBar />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </>
    )
}
export default App;
