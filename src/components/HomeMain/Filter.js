import React from "react";
import * as S from "../../styles/HomeMain/Filter.style";

import { ReactComponent as Pool } from "./svg/pool.svg";
import { ReactComponent as Fire } from "./svg/Fire.svg";
import { ReactComponent as UFO } from "./svg/UFO.svg";
import { ReactComponent as Camping } from "./svg/Camping.svg";
import { ReactComponent as Bowling } from "./svg/Bowling.svg";
import { ReactComponent as Ski } from "./svg/Ski.svg";
import { ReactComponent as Surfing } from "./svg/Surfing.svg";
import { ReactComponent as Pisa } from "./svg/Pisa.svg";
import { ReactComponent as Desert } from "./svg/Desert.svg";
import { ReactComponent as Golf } from "./svg/Golf.svg";
import { ReactComponent as Castle } from "./svg/Castle.svg";
import { ReactComponent as Beach } from "./svg/Beach.svg";
import { ReactComponent as Farm } from "./svg/Farm.svg";

const Filter = () => {
  return (
    <S.Filter>
      <S.FilterItemWrapper>
        <Pool width="30" height="30" />
        <div>멋진 수영장</div>
      </S.FilterItemWrapper>
      <S.FilterItemWrapper>
        <Fire width="40" height="40" />
        <div style={{ position: "relative", top: "-5px" }}>인기 급상승</div>
      </S.FilterItemWrapper>
      <S.FilterItemWrapper>
        <UFO width="30" height="30" />
        <div>기상천외한 숙소</div>
      </S.FilterItemWrapper>
      <S.FilterItemWrapper>
        <Camping width="30" height="30" />
        <div>캠핑장</div>
      </S.FilterItemWrapper>
      <S.FilterItemWrapper>
        <Bowling width="30" height="30" />
        <div>키즈</div>
      </S.FilterItemWrapper>
      <S.FilterItemWrapper>
        <Ski width="30" height="30" />
        <div>스키</div>
      </S.FilterItemWrapper>
      <S.FilterItemWrapper>
        <Surfing width="30" height="30" />
        <div>서핑</div>
      </S.FilterItemWrapper>
      <S.FilterItemWrapper>
        <Pisa width="30" height="30" />
        <div>상징적 도시</div>
      </S.FilterItemWrapper>
      <S.FilterItemWrapper>
        <Desert width="30" height="30" />
        <div>사막</div>
      </S.FilterItemWrapper>
      <S.FilterItemWrapper>
        <Golf width="30" height="30" />
        <div>골프</div>
      </S.FilterItemWrapper>
      <S.FilterItemWrapper>
        <Castle width="30" height="30" />
        <div>성</div>
      </S.FilterItemWrapper>
      <S.FilterItemWrapper>
        <Beach width="30" height="30" />
        <div>해변 바로 앞</div>
      </S.FilterItemWrapper>
      <S.FilterItemWrapper>
        <Farm width="30" height="30" />
        <div>농장</div>
      </S.FilterItemWrapper>
    </S.Filter>
  );
};

export default Filter;
