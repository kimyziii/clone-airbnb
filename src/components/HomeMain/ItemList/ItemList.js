import React from "react";
import Item from "./Item";
import * as S from "../../../styles/HomeMain/ItemList/ItemList.style";

const ItemList = (props) => {
  return (
    <S.ItemList>
      {props.data.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </S.ItemList>
  );
};

export default ItemList;
