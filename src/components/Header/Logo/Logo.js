import React from "react";
import * as S from "../../../styles/Header/Logo.style";
import { Navigate, useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  }
  return (
    <div onClick={()=>goMain()}>
      <S.Logo src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" ></S.Logo>
    </div>
  );
};

export default Logo;
