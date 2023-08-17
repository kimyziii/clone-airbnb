import React, { useEffect, useState } from "react";
import Item from "./Item";
import * as S from "../../../styles/HomeMain/ItemList/ItemList.style";
import { useNavigate } from "react-router-dom";

const ItemList = (props) => {
  const [dataList, setDataList] = useState([]);
  const getDataList = () => {
    fetch('http://localhost:3000/data/airbnb.json',{
    method: 'GET',
  }).then(res => res.json())
  .then(data => {
    setDataList(data.data);
  })
  }
  
  useEffect(()=> {
      getDataList();
    
  },[dataList.length])
  return (
    <S.ItemList>
      {dataList.map((item, index) => (
        <Item key={index} item={item}/>
      ))}
    </S.ItemList>
  );
};

export default ItemList;
