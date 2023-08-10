import React from "react";
import ReactDOM from "react-dom";
import * as S from "../../styles/Modal/Register.style";
import Backdrop from "./Backdrop";

const Register = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop handleSignUpClose={props.handleSignUpClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <S.Container />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Register;
