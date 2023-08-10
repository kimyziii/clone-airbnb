import React from "react";
import Auth from "./Auth/Auth";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import * as S from "../../styles/Header/Header.style";

const Header = () => {
  return (
    <S.Wrapper>
      <Logo />
      <Search />
      <Auth />
    </S.Wrapper>
  );
};

export default Header;
