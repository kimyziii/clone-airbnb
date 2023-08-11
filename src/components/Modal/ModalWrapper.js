import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const ModalWrapper = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop handleSignUpClose={props.handleSignUpClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ModalWrapper;
