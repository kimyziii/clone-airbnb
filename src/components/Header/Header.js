import React, { useState } from "react";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";
import Search from "./Search/Search";
import * as S from "../../styles/Header/Header.style";

const Header = (props) => {
  const [isOpenSearchModal, setIsOpenSearchModal] = useState(false);
  const clickHandler = () => {
    setIsOpenSearchModal((prevState) => !prevState);
  };

  return (
    <S.Wrapper>
      <Logo />
      <S.SearchWrapper>
        <Search onClick={clickHandler} />
        {isOpenSearchModal && <S.SearhModal />}
      </S.SearchWrapper>
      <Profile />
    </S.Wrapper>
  );
};

export default Header;
