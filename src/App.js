import React, { useState } from "react";
import { Reset } from "styled-reset";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeMain from "./components/HomeMain/HomeMain";
import Register from "./components/Modal/Register";

function App() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [openSignUp, setOpenSignUp] = useState(false);
  const handleSignUpClick = () => {
    setOpenSignUp((prevState) => !prevState);
  };
  const handleSignUpClose = () => {
    setOpenSignUp(false);
  };

  return (
    <React.Fragment>
      <Reset />
      <Header handleSignUpClick={handleSignUpClick} />
      <HomeMain data={array} />
      <Footer />
      {openSignUp && <Register handleSignUpClose={handleSignUpClose} />}
    </React.Fragment>
  );
}

export default App;
