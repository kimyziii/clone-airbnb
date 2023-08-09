import styled from "styled-components";

export const Filter = styled.div`
  position: fixed;
  position: fixed;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100vw;
  gap: 35px;
  z-index: 1;
  top: 5rem;
`;

export const FilterItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 0.8rem;
  height: 70px;
  padding-bottom: 4px;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid gray;
  }
`;
