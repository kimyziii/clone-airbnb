import React, { useEffect, useState } from "react";
import { Reset } from "styled-reset";
import Footer from "./components/Footer/Footer";
import NewHeader from "./components/Header/NewHeader";
import SearchModal from "./components/Header/SearchModal";
import HomeMain from "./components/HomeMain/HomeMain";
import DetailPage from "./components/DetailPage/DetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [dataList, setDataList] = useState([]);
  const getDataList = () => {
    fetch("http://localhost:3000/data/airbnb.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setDataList(data.data);
      });
  };

  useEffect(() => {
    getDataList();
  }, [dataList.length]);

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
      <BrowserRouter>
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
            data={dataList}
            setLocationModalOpen={locationModalHandler}
            setPriceModalOpen={priceModalHandler}
          />
        )}
        <Routes>
          <Route path="/" element={<HomeMain data={dataList} />}></Route>
          <Route path="/detailpage/:itemId" element={<DetailPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
