import styled from "styled-components";

export const ShareWrap = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: rgb(0, 0, 0); */
  z-index: 1;
  position: absolute;
`;

export const ShareArea = styled.div`
  width: 400px;
  height: 300px;
  background-color: white;
  transform: translate(140%, 18%);
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  margin: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

export const CloseDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
export const clipCopyDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
`;
export const PathAddr = styled.input`
  font-size: 16px;
  padding: 5px;
  margin-bottom: 17px;
`;
