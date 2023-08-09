import React from "react";
import * as S from "../../styles/HomeMain/HomeMain.style";
import Filter from "./Filter";
import ItemList from "./ItemList/ItemList";

const HomeMain = (props) => {
  return (
    <S.Wrapper>
      <Filter />
      <ItemList data={props.data} />
    </S.Wrapper>
  );
};

export default HomeMain;
