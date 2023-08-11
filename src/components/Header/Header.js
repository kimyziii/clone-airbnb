import React from "react";
import Logo from "./Logo/Logo";
import Auth from "./Profile/Profile";
import Search from "./Search/Search";
import * as S from "../../styles/Header/Header.style";

const Header = (props) => {
  return (
    <S.Wrapper>
      <Logo />
      <Search />
      <Auth />
    </S.Wrapper>
  );
};

export default Header;
