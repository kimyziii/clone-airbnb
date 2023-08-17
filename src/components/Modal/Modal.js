import React from "react";
import * as S from "../../styles/Modal/Modal.style";

const Modal = (props) => {
  return (
    <S.Modal>
      <S.Title>로그인 또는 회원 가입</S.Title>
      <S.Content>
        <S.Text>에어비앤비에 오신 것을 환영합니다.</S.Text>
        <S.InputGroup>
          <S.InputWrapper>
            <label htmlFor="region">국가/지역</label>
            <select>
              <option>한국 (+82)</option>
            </select>
          </S.InputWrapper>
          <S.InputWrapper>
            <label htmlFor="region">전화번호</label>
            <input id="region" type="text" />
          </S.InputWrapper>
        </S.InputGroup>
        <S.Description>
          전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
          데이터 요금이 부과됩니다. 개인정보 처리방침
        </S.Description>
        <S.ContinueBtn>계속</S.ContinueBtn>
      </S.Content>
    </S.Modal>
  );
};

export default Modal;
