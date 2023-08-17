import React, { useState } from "react";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";

import * as S from "../../styles/Header/Header.style";
import { ReactComponent as Icon } from "./svg/Icon.svg";

const NewHeader = (props) => {
  return (
    <>
      <S.NewWrapper>
        <Logo />
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
        </S.NewSearchWrapper>
        <Profile />
      </S.NewWrapper>
    </>
  );
};

export default NewHeader;
