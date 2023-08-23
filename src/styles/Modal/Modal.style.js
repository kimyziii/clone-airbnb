import styled from "styled-components";

export const Modal = styled.div`
  width: 45vw;
  height: 37vh;
  background-color: white;
  border-radius: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const Title = styled.div`
  font-size: 0.8rem;
  border-bottom: 1px solid lightgray;
  font-weight: 600;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: fit-content;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const InputGroup = styled.div`
  border: 1px solid gray;
  border-radius: 0.6rem;
  width: 100%;
  height: 7rem;
  display: grid;
  grid-template-rows: 1fr 1fr;

  div {
    &:first-child {
      border-bottom: 1px solid gray;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  cursor: pointer;

  label {
    position: relative;
    padding-top: 0.5rem;
    font-size: 0.7rem;
    color: #737373;
  }

  input {
    width: 100%;
    border: none;
    height: 100%;
    font-size: 1rem;
    background: transparent;

    &:focus {
      outline: none;
    }
  }

  select {
    border: none;
    padding-top: 0.5rem;
    font-size: 0.9rem;
    font-weight: 400;
  }
`;

export const Description = styled.div`
  font-size: 0.6rem;
  color: gray;
`;

export const ContinueBtn = styled.button`
  border: none;
  background-color: #de1360;
  color: white;
  width: 100%;
  height: 2rem;
  cursor: pointer;
  border-radius: 0.6rem;
`;
