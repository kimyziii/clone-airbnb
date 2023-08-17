import React from "react";
import ReactDOM from "react-dom";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";

import * as S from "../../styles/Header/Header.style";
import { ReactComponent as Icon } from "./svg/Icon.svg";

const Backdrop = (props) => {
  return <S.Backdrop onClick={props.modalhandler}></S.Backdrop>;
};

const SearchModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}

      <S.NewModalWrapper>
        <Logo />
        {/* search start */}
        <S.NewSearchWrapper>
          <S.NewSearch>
            <S.NewSearchPart onClick={props.setLocationModalOpen}>
              어디든지
            </S.NewSearchPart>
            <S.NewSearchPart>|</S.NewSearchPart>
            <S.NewSearchPart onClick={props.setPriceModalOpen}>
              얼마든지
            </S.NewSearchPart>
            <Icon stroke="#ff5A5F" width="25" height="25" />
          </S.NewSearch>
          {props.modal && (
            <S.NewSearchModal>
              {props.locationModal && (
                <S.NewSearchModalLocationWrapper>
                  <S.NewSearchModalLocation>
                    <label>여행지</label>
                    <input placeholder="지도 표시 지역" type="text" />
                  </S.NewSearchModalLocation>
                  <S.NewSearchModalLocationModal />
                </S.NewSearchModalLocationWrapper>
              )}
              {props.priceModal && (
                <S.NewSearchModalPriceWrapper>
                  <S.NewSearchModalPrice>
                    <S.NewSearchModalPriceType>
                      <label>최저 요금</label>
                      <input type="text" />
                    </S.NewSearchModalPriceType>
                    <S.NewSearchModalPriceType>
                      <label>최고 요금</label>
                      <input type="text" />
                    </S.NewSearchModalPriceType>
                  </S.NewSearchModalPrice>
                  <S.NewSearchModalPriceModal />
                </S.NewSearchModalPriceWrapper>
              )}
            </S.NewSearchModal>
          )}
        </S.NewSearchWrapper>
        {/* search end */}
        <Profile />
      </S.NewModalWrapper>
    </>
  );
};

export default SearchModal;
