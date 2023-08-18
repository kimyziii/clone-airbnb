import { styled } from "styled-components";

export const AuthMenu = styled.div`
  position: absolute;
  top: 4rem;
  right: 4rem;
  width: 10rem;
  height: 5rem;
  border: 1px solid #e3e3e3;
  border-radius: 15px;
  background: white;
  display: grid;
  font-size: 0.8rem;
  justify-items: baseline;
  align-items: center;
  z-index: 10;

  div {
    width: 80%;
    border: none;
    background-color: white;
    cursor: pointer;
    text-align: left;
    padding-left: 20px;
  }
`;
