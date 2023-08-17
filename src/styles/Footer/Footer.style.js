import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  gap: 1rem;
  width: 100vw;
  height: 7rem;
  // position: fixed;
  bottom: 0px;
  border-top: 1px solid lightgray;
  background-color: white;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
`;

export const Bottom = styled.div`
  font-size: x-small;
  color: darkgray;
  margin: 0 4rem;
  padding-top: 1rem;
  border-top: 1px solid lightgray;
`;
export const Left = styled.div`
  font-size: 0.8rem;
`;
export const Right = styled.div`
  font-size: 0.8rem;
  margin-right: 8rem;
`;
