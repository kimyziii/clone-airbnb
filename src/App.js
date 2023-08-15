import React, { useEffect, useState } from "react";
import { Reset } from "styled-reset";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewHeader from "./components/Header/NewHeader";
import HomeMain from "./components/HomeMain/HomeMain";
import data from "./data/airbnb.json";
function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("/data/airbnb.json")
  //     .then((res) => {
  //       console.log(res);
  //       res.json();
  //     })
  //     .then(setData);
  // }, []);

  console.log(data);

  return (
    <React.Fragment>
      <Reset />
      <Header />
      <NewHeader />
      {/* <HomeMain data={data.data} /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
