import React from "react";
import * as S from "../../styles/DetailPage/PriceModal.style";

const PriceModal = () => {
  return (
    <S.ModalArea>
      <S.DetailInner>
        <div className="detail-area">
          <S.Divbox>
            <div>
              <S.priceText>₩86,667</S.priceText>
              <span>/박</span>
            </div>
            <div>
              <span>후기 ２개</span>
            </div>
          </S.Divbox>
          <div className="member-num">
            <S.Divbox>
              <p>인원</p>
              <p>게스트 1명</p>
            </S.Divbox>
          </div>
          <S.ReserveBtn>예약하기</S.ReserveBtn>
        </div>
        <S.Divbox>
          <S.Comment>예약 확정 전에는 요금이 청구되지 않습니다.</S.Comment>
        </S.Divbox>
        <div className="price-area">
          <S.Divbox>
            <div>가격 * 수</div>
            <div>total 값</div>
          </S.Divbox>
          <S.Divbox>
            <div>에어비엔비 서비스 수수료</div>
            <div>수수료 가격표출</div>
          </S.Divbox>
        </div>
        <S.TotalInner>
        <S.Divbox>
          <span>Total</span>
          <span></span>
        </S.Divbox>
      </S.TotalInner>
      </S.DetailInner>
      
    </S.ModalArea>
  );
};

export default PriceModal;
