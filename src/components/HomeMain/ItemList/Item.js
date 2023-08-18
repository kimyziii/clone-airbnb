import React from "react";
import * as S from "../../../styles/HomeMain/ItemList/Item.style";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const url = item.img1;

  // 클릭 시 상세페이지 이동 기능
  const navigate = useNavigate();
  const goDetailPage = ({ item }) => {
    navigate("/detailpage", {
      state: {
        id: item.id,
        title: item.title,
        filter: item.filter,
        place: item.place,
        price: item.price,
        maxPeople: item.maxPeople,
        detailText: item.detailText,
        host: item.host,
        img1: item.img1,
        img2: item.img2,
        img3: item.img3,
        img4: item.img4,
        img5: item.img5,
      },
    });
  };

  return (
    <S.Item onClick={() => goDetailPage({ item })}>
      <S.Image style={{ backgroundImage: `url(${url})` }} />
      <S.Inform>
        <S.Title>{item.title}</S.Title>
        <S.Text>{item.host}</S.Text>
        <S.Title>
          ₩ {item.price} / 최대 {item.maxPeople} 명
        </S.Title>
      </S.Inform>
    </S.Item>
  );
};

export default Item;
