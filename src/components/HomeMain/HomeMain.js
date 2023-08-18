import React, { useState } from "react";
import * as S from "../../styles/HomeMain/HomeMain.style";
import Filter from "./Filter";
import ItemList from "./ItemList/ItemList";

const HomeMain = (props) => {
  const [filter, setFilter] = useState("");
  const filterHandler = (filter) => {
    setFilter(filter);
  };

  let data = [];
  if (filter === "") {
    data = props.data;
  } else {
    props.data.forEach((item) => {
      if (item.filter === filter) {
        data.push(item);
      }
    });
  }

  return (
    <S.Wrapper>
      <Filter onClick={filterHandler} />
      <ItemList data={data} />
    </S.Wrapper>
  );
};

export default HomeMain;
