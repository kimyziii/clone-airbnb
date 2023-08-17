import React, { useEffect, useState } from "react";
import { Reset } from "styled-reset";
import Footer from "./components/Footer/Footer";
import NewHeader from "./components/Header/NewHeader";
import SearchModal from "./components/Header/SearchModal";
import HomeMain from "./components/HomeMain/HomeMain";
import data from "./data/airbnb.json";
function App() {
  const [modal, setModal] = useState(false);
  const modalhandler = () => {
    setModal((prevModalState) => !prevModalState);
  };

  const [locationModal, setLocationModal] = useState(false);
  const locationModalHandler = () => {
    if (locationModal === false) {
      setModal(true);
      setLocationModal(true);
      setPriceModal(false);
    }
    if (locationModal === true) {
      setModal(false);
      setLocationModal(false);
      setPriceModal(false);
    }
  };

  const [priceModal, setPriceModal] = useState(false);
  const priceModalHandler = () => {
    if (priceModal === false) {
      setModal(true);
      setPriceModal(true);
      setLocationModal(false);
    } else {
      setModal(false);
      setPriceModal(false);
      setLocationModal(false);
    }
  };

  return (
    <React.Fragment>
      <Reset />
      {!modal && (
        <NewHeader
          setLocationModalOpen={locationModalHandler}
          setPriceModalOpen={priceModalHandler}
        />
      )}
      {modal && (
        <SearchModal
          modal={modal}
          modalhandler={modalhandler}
          locationModal={locationModal}
          priceModal={priceModal}
          setLocationModalOpen={locationModalHandler}
          setPriceModalOpen={priceModalHandler}
        />
      )}
      <HomeMain data={data.data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
