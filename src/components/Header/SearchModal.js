import React from "react";
import ReactDOM from "react-dom";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";
import locationSearchImg from "../../img/locationSearch.png";

import * as S from "../../styles/Header/Header.style";
import { ReactComponent as Icon } from "./svg/Icon.svg";

const Backdrop = (props) => {
  return <S.Backdrop onClick={props.modalhandler}></S.Backdrop>;
};

const SearchModal = (props) => {
  const data = props.data;

  function extractValuesByKey(arr, key) {
    return arr.map((obj) => obj[key]);
  }

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const keyToExtract = "price";
  const pricesArray = extractValuesByKey(data, keyToExtract);
  const numberArray = pricesArray.map((price) => price.replace(/,/g, ""));

  let minPrice = 0;
  let maxPrice = 99999999;

  if (numberArray.length > 0) {
    minPrice = formatNumberWithCommas(Math.min(...numberArray));
    maxPrice = formatNumberWithCommas(Math.max(...numberArray));
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}

      <S.NewModalWrapper>
        <Logo />
        {/* search start */}
        <S.NewSearchWrapper>
          <S.NewSearch>
            <S.NewSearchPart onClick={props.setLocationModalOpen}>
              어디든지
            </S.NewSearchPart>
            <S.NewSearchPart>|</S.NewSearchPart>
            <S.NewSearchPart onClick={props.setPriceModalOpen}>
              얼마든지
            </S.NewSearchPart>
            <Icon stroke="#ff5A5F" width="25" height="25" />
          </S.NewSearch>
          {props.modal && (
            <S.NewSearchModal>
              {props.locationModal && (
                <>
                  <S.NewSearchModalLocationWrapper>
                    <S.NewSearchModalLocation>
                      <label>여행지</label>
                      <input placeholder="지도 표시 지역" type="text" />
                    </S.NewSearchModalLocation>
                    <S.NewSearchModalLocationModal>
                      <span>지역으로 검색하기</span>
                      <img
                        alt="search by location"
                        width="100%"
                        height="100%"
                        src={locationSearchImg}
                      />
                    </S.NewSearchModalLocationModal>
                  </S.NewSearchModalLocationWrapper>
                  <S.NewSearchModalPriceWrapper_BG>
                    <S.NewSearchModalPrice_BG>
                      <S.NewSearchModalPriceType>
                        <label>최저 요금</label>
                        <input type="text" value={minPrice ? minPrice : "0"} />
                      </S.NewSearchModalPriceType>
                      <S.NewSearchModalPriceType>
                        <label>최고 요금</label>
                        <input
                          type="text"
                          value={maxPrice ? maxPrice : "99999999+"}
                        />
                      </S.NewSearchModalPriceType>
                    </S.NewSearchModalPrice_BG>
                  </S.NewSearchModalPriceWrapper_BG>
                </>
              )}
              {props.priceModal && (
                <>
                  <S.NewSearchModalLocationWrapper>
                    <S.NewSearchModalLocation_BG>
                      <label>여행지</label>
                      <input placeholder="지도 표시 지역" type="text" />
                    </S.NewSearchModalLocation_BG>
                  </S.NewSearchModalLocationWrapper>
                  <S.NewSearchModalPriceWrapper>
                    <S.NewSearchModalPrice>
                      <S.NewSearchModalPriceType>
                        <label>최저 요금</label>
                        <input type="text" value={minPrice ? minPrice : "0"} />
                      </S.NewSearchModalPriceType>
                      <S.NewSearchModalPriceType>
                        <label>최고 요금</label>
                        <input
                          type="text"
                          value={maxPrice ? maxPrice : "99999999+"}
                        />
                      </S.NewSearchModalPriceType>
                    </S.NewSearchModalPrice>
                    <S.NewSearchModalPriceModal>
                      <span>가격 범위</span>
                      <section>
                        <div class="text">최저 금액</div>
                        <div class="bar">
                          <div class="min-dot"></div>
                        </div>
                      </section>
                      <section>
                        <div class="text">최고 금액</div>
                        <div class="bar">
                          <div class="max-dot"></div>
                        </div>
                      </section>
                    </S.NewSearchModalPriceModal>
                  </S.NewSearchModalPriceWrapper>
                </>
              )}
            </S.NewSearchModal>
          )}
        </S.NewSearchWrapper>
        {/* search end */}
        <Profile />
      </S.NewModalWrapper>
    </>
  );
};

export default SearchModal;
