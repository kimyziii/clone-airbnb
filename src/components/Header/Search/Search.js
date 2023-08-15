import React, { useState } from "react";
import Query from "./Query";
import { ReactComponent as Icon } from "../svg/Icon.svg";
import * as S from "../../../styles/Header/Search.style";

const Search = (props) => {
  return (
    <>
      <S.Search onClick={props.onClick}>
        <Query />
        <Icon stroke="#ff5A5F" width="25" height="25" />
      </S.Search>
    </>
  );
};

export default Search;
