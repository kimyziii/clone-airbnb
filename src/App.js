import React, { useState } from "react";
import { Reset } from "styled-reset";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeMain from "./components/HomeMain/HomeMain";
import DetailPage from "./components/DetailPage/DetailPage"
import Register from "./components/Modal/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Reset />
        <Header handleSignUpClick={handleSignUpClick} />
        <Routes>
          <Route path="/" element={<HomeMain data={array} />} ></Route>
          <Route path="/detailpage" element={<DetailPage />} ></Route>
        </Routes>
        <Footer />
        {openSignUp && <Register handleSignUpClose={handleSignUpClose} />}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
