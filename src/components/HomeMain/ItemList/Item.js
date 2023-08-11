import React from "react";
import * as S from "../../../styles/HomeMain/ItemList/Item.style";

const Item = (props) => {
  const item = props.data;
  const url = item.url;

  return (
    <S.Item>
      <S.Image style={{ backgroundImage: `url(${url})` }} />
      <S.Title>{item.place}</S.Title>
      <S.Text>{item.distance}</S.Text>
      <S.Title>₩{item.price.toLocaleString()} / 명</S.Title>
    </S.Item>
  );
};

export default Item;
