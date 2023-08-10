import React from "react";
import { Reset } from "styled-reset";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeMain from "./components/HomeMain/HomeMain";

function App() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <React.Fragment>
      <Reset />
      <Header />
      <HomeMain data={array} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
