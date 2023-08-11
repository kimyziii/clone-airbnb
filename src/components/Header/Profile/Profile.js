import React, { useState } from "react";
import { ReactComponent as User } from "../svg/User.svg";
import { ReactComponent as Bar } from "../svg/Bar.svg";
import * as S from "../../../styles/Header/Profile.style";

import AuthMenu from "./AuthMenu";
import ModalWrapper from "../../Modal/ModalWrapper";

const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const clickHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const blurHandler = () => {
    // setMenuOpen(false);
  };

  const modalOpenHandler = () => {
    console.log(`열려야됨`);
    setModalOpen(true);
    setMenuOpen(false);
  };
  const modalCloseHandler = () => {
    setModalOpen(false);
  };

  return (
    <>
      <S.Profile tabIndex={1} onBlur={blurHandler} onClick={clickHandler}>
        <Bar width="20" height="20" stroke="#646464" />
        <User width="30" height="30" stroke="#646464" fill="#646464" />
      </S.Profile>
      {menuOpen && (
        <AuthMenu
          modalOpenHandler={modalOpenHandler}
          onBlur={modalCloseHandler}
        />
      )}
      {modalOpen && <ModalWrapper handleSignUpClose={modalCloseHandler} />}
    </>
  );
};

export default Profile;
