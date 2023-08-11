import React from "react";
import Query from "./Query";
import { ReactComponent as Icon } from "../svg/Icon.svg";
import * as S from "../../../styles/Header/Search.style";

const Search = () => {
  return (
    <S.Search>
      <Query />
      <Icon stroke="#ff5A5F" width="25" height="25" />
    </S.Search>
  );
};

export default Search;
