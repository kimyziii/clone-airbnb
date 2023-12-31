import React, { useState } from "react";
import { ReactComponent as User } from "../svg/User.svg";
import { ReactComponent as Bar } from "../svg/Bar.svg";
import * as S from "../../../styles/Header/Profile.style";

import AuthMenu from "./AuthMenu";
import ModalWrapper from "../../Modal/ModalWrapper";

const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const clickHandler = (event) => {
    event.stopPropagation();
    setMenuOpen((prevState) => !prevState);
  };

  const modalOpenHandler = () => {
    setModalOpen(true);
    setMenuOpen(false);
  };
  const modalCloseHandler = () => {
    setModalOpen(false);
  };

  return (
    <>
      <S.Profile tabIndex={1} onClick={clickHandler}>
        <Bar width="20" height="20" stroke="#646464" />
        <User width="30" height="30" stroke="#646464" fill="#646464" />
      </S.Profile>
      {menuOpen && <AuthMenu modalOpenHandler={modalOpenHandler} />}
      {modalOpen && <ModalWrapper handleSignUpClose={modalCloseHandler} />}
    </>
  );
};

export default Profile;
