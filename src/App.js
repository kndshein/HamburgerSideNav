import "./App.css";
import React from "react";
import Nav from "./Nav";
import { FaHamburger } from "react-icons/fa";

function App() {
  const [nav, setNav] = React.useState(false);

  const handleClick = () => {
    nav ? setNav(false) : setNav(true);
  };

  return (
    <div className="App">
      <Nav handleClick={handleClick} nav={nav} />
      <div onClick={() => handleClick()} className="hamburger">
        <FaHamburger size={30} />
      </div>
      <div className="tagline">Fancy a burger?</div>
    </div>
  );
}

export default App;
