import React, { useState } from "react";
import * as S from "../../styles/Header/Header.style";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";
import { ReactComponent as Icon } from "./svg/Icon.svg";

const NewHeader = () => {
  const [openModal, setOpenModal] = useState(false);
  const clickHandler = () => {
    console.log(`modal open`);
    setOpenModal(true);
  };

  return (
    <S.NewWrapper>
      <Logo />
      {/* search start */}
      <S.NewSearchWrapper>
        <S.NewSearch onClick={clickHandler}>
          <S.NewSearchPart>어디든지</S.NewSearchPart>
          <S.NewSearchPart>|</S.NewSearchPart>
          <S.NewSearchPart>얼마든지</S.NewSearchPart>
          <Icon stroke="#ff5A5F" width="25" height="25" />
        </S.NewSearch>
        <S.NewSearchModal>
          <S.NewSearchModalLocationWrapper>
            <S.NewSearchModalLocation>
              <label>여행지</label>
              <input placeholder="지도 표시 지역" type="text" />
            </S.NewSearchModalLocation>
            <S.NewSearchModalLocationModal />
          </S.NewSearchModalLocationWrapper>
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
        </S.NewSearchModal>
      </S.NewSearchWrapper>
      {/* search end */}
      <Profile />
    </S.NewWrapper>
  );
};

export default NewHeader;
