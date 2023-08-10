import React, { useState } from "react";
import Logo from "./Logo/Logo";
import Auth from "./Auth/Auth";
import Search from "./Search/Search";
import * as S from "../../styles/Header/Header.style";
import AuthMenu from "./Auth/AuthMenu";

const Header = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const openAuthMenuHandler = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const closeAuthMenuHandler = () => {
    console.log(`onBlur`);
    setOpenMenu(false);
  };

  return (
    <S.Wrapper>
      <Logo />
      <Search />
      <Auth
        openAuthMenuHandler={openAuthMenuHandler}
        closeAuthMenuHandler={closeAuthMenuHandler}
      />
      {openMenu && <AuthMenu handleSignUpClick={props.handleSignUpClick} />}
    </S.Wrapper>
  );
};

export default Header;
