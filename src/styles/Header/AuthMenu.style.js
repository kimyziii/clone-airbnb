import { styled } from "styled-components";

export const AuthMenu = styled.div`
  position: absolute;
  top: 4rem;
  right: 2rem;
  width: 10rem;
  height: 5rem;
  border: 1px solid #e3e3e3;
  border-radius: 15px;
  background: white;
  display: grid;
  font-size: 0.8rem;
  justify-items: baseline;
  align-items: center;

  div {
    width: 100%;
    border: none;
    background-color: white;
    cursor: pointer;
    text-align: left;
    padding-left: 20px;
  }
`;
