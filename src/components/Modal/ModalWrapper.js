import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

import * as S from "../../styles/Modal/ModalWrapper.style";

const ModalWrapper = (props) => {
  return (
    <S.ModalWrapper>
      {ReactDOM.createPortal(
        <Backdrop handleSignUpClose={props.handleSignUpClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal />,
        document.getElementById("overlay-root")
      )}
    </S.ModalWrapper>
  );
};

export default ModalWrapper;
