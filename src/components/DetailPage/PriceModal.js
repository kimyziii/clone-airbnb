import React, { useEffect, useState } from "react";
import * as S from "../../styles/DetailPage/PriceModal.style";

const PriceModal = ({ price, maxCount }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [travelPeriod, setTravelPeriod] = useState(1);
  const [count, setCount] = useState(1);
  const [fee, setFee] = useState(0);

  //증감 설정
  const handleIncrement = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // 시작일, 종료일을 저장하는 state 생성
  const year = new Date().getFullYear();
  const month = new Date().getMonth().toString().padStart(2, 0);
  const day = new Date().getDate().toString().padStart(2, 0);
  const day2 = (new Date().getDate() + 1).toString().padStart(2, 0);
  const [startDate, setStartDate] = useState(year + "-" + month + "-" + day);
  const [endDate, setEndDate] = useState(year + "-" + month + "-" + day2);

  // 시작일 input 변경 시 state 업데이트
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  // 종료일 input 변경 시 state 업데이트
  const handleEndDateChange = (event) => {
    const selectedEndDate = event.target.value;
    if (selectedEndDate >= startDate) {
      setEndDate(selectedEndDate);
    } else {
      alert("종료일은 시작일 이후로 선택해주세요.");
    }
  };

  const changeDate = () => {
    const start = startDate.replaceAll("-", "");
    const end = endDate.replaceAll("-", "");

    const date = end - start;
    const sumPrice = parseInt(price?.replace(",", ""));

    setTravelPeriod(date);
    setTotalPrice(sumPrice * date);
    setFee(((sumPrice * date) / 100) * 5);
  };

  useEffect(() => {
    changeDate();
  }, [startDate, endDate]);

  return (
    <S.ModalArea>
      <S.DetailInner>
        <div className="detail-area">
          <S.Divbox>
            <div>
              <S.priceText>{price}</S.priceText>
              <span>/박</span>
            </div>
            <div>
              <span>후기 ２개</span>
            </div>
          </S.Divbox>
          <div className="member-num">
            <S.Divbox>
              <div>인원</div>
              <div style={{ display: "flex" }}>
                <button
                  onClick={() => {
                    handleDecrement();
                  }}
                >
                  -
                </button>
                <div>게스트 {count}명</div>
                <button
                  onClick={() => {
                    handleIncrement();
                  }}
                >
                  +
                </button>
              </div>
            </S.Divbox>
            <S.Divbox>
              <label>
                시작일:
                <input
                  type="date"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
              </label>
              <label>
                종료일:
                <input
                  type="date"
                  value={endDate}
                  onChange={handleEndDateChange}
                />
              </label>
            </S.Divbox>
          </div>
          <S.ReserveBtn>예약하기</S.ReserveBtn>
        </div>
        <S.Divbox>
          <S.Comment>예약 확정 전에는 요금이 청구되지 않습니다.</S.Comment>
        </S.Divbox>
        <div className="price-area">
          <S.Divbox>
            <div>
              {price} * {travelPeriod}
            </div>
            <div>{totalPrice === 0 ? price : totalPrice}</div>
            {/* <div>{console.log(price)}</div> */}
          </S.Divbox>
          <S.Divbox>
            <div style={{ width: "50%", fontSize: "14px" }}>
              에어비엔비 서비스 수수료
            </div>
            <div>{fee}</div>
          </S.Divbox>
        </div>
        <S.TotalInner>
          <S.Divbox>
            <span>Total</span>
            <span>{totalPrice + fee}</span>
          </S.Divbox>
        </S.TotalInner>
      </S.DetailInner>
    </S.ModalArea>
  );
};

export default PriceModal;
