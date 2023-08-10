import React from "react";
import * as S from "../../../styles/HomeMain/ItemList/Item.style";

const Item = (props) => {
  const url =
    "https://a0.muscache.com/im/pictures/prohost-api/Hosting-574843000111312410/original/acdd719e-d7c1-4a4d-8852-fbe1dc49f6b5.jpeg";
  return (
    <S.Item>
      <S.Image style={{ backgroundImage: `url(${url})` }} />
      <S.Title>Dolsan-eup, Yeosu-si, 전라남도, 한국</S.Title>
      <S.Text>326km 거리</S.Text>
      <S.Title>₩159,000 / 명</S.Title>
    </S.Item>
  );
};

export default Item;
