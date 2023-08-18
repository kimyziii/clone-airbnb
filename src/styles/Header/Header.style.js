import styled from "styled-components";

export const NewWrapper = styled.div`
  background-color: white;
  padding: 1rem 4rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid lightgray;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 3;
`;

export const NewModalWrapper = styled.div`
  background-color: white;
  padding: 2rem 4rem;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid lightgray;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;

  z-index: 100;
  overflow: hidden;
`;

export const NewSearchWrapper = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const NewSearch = styled.div`
  width: 35%;
  height: 2.5rem;
  border: 1px solid lightgray;
  border-radius: 4rem;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  div {
    position: relative;
    font-size: small;
    left: 10px;
    cursor: pointer;

    &:nth-last-of-type(1) {
      margin-right: 1.5rem;
    }
  }
`;

export const NewSearchPart = styled.div`
  // width: 40%;
`;

export const NewSearchModal = styled.div`
  width: 74%;
  min-height: 3rem;
  border: 1px solid lightgray;
  border-radius: 2rem;
  background-color: #ededed;

  display: flex;
`;

export const NewSearchModalLocationWrapper = styled.div`
  position: relative;
  width: 40%;
  height: 3rem;
`;

export const NewSearchModalLocation = styled.div`
  height: 3.3rem;
  position: relative;
  top: -1px;
  left: -2px;
  width: 100%;
  border-radius: 1.5rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  display: flex;
  flex-direction: column;
  font-size: x-small;

  label {
    margin-left: 18px;
    margin-top: 11px;
    font-weight: 800;
  }

  input {
    width: 80%;
    margin-left: 15px;
    margin-top: 5px;
    padding-left: 5px;
    border: none;
  }
`;

export const NewSearchModalLocation_BG = styled.div`
  height: 3.3rem;
  position: relative;
  top: -1px;
  left: -2px;
  width: 100%;
  border-radius: 1.5rem;

  display: flex;
  flex-direction: column;
  font-size: x-small;

  label {
    margin-left: 18px;
    margin-top: 11px;
    font-weight: 800;
  }

  input {
    width: 80%;
    margin-left: 15px;
    margin-top: 5px;
    padding-left: 5px;
    border: none;
    background: none;
  }
`;
export const NewSearchModalLocationModal = styled.div`
  height: 23rem;
  width: 30%;
  margin-top: 12px;
  border-radius: 2rem;
  background-color: white;
  position: fixed;
  z-index: 100;
  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-size: small;
    font-weight: 600;
  }
`;
export const NewSearchModalPriceWrapper = styled.div`
  position: relative;
  width: 45%;
  // left: 40%;
  height: 3rem;
  display: flex;
  justify-content: center;
`;

export const NewSearchModalPriceWrapper_BG = styled.div`
  position: relative;
  width: 40%;
  display: flex;
  justify-content: center;
`;

export const NewSearchModalPrice = styled.div`
  height: 3.2rem;
  position: relative;
  top: -2px;
  left: 2px;
  width: 100%;
  border-radius: 1.5rem;
  background-color: white;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  display: flex;
  flex-direction: row;
  font-size: x-small;
`;

export const NewSearchModalPrice_BG = styled.div`
  height: 3.2rem;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: x-small;

  input {
    background: none;
    color: gray;
  }
`;

export const NewSearchModalPriceType = styled.div`
  width: 55%;
  height: 97%;
  border-radius: 2rem;

  label {
    margin-left: 15px;
    position: relative;
    top: 11px;
    left: 4px;
    font-weight: 800;
  }

  input {
    width: 70%;
    margin-left: 12px;
    position: relative;
    top: 14px;
    left: 5px;
    border: none;
  }
`;
export const NewSearchModalPriceModal = styled.div`
  height: 10rem;
  width: 30%;
  margin-top: 12px;
  border-radius: 2rem;
  position: fixed;
  top: 9rem;
  z-index: 100;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  gap: 1.5rem;

  section {
    width: 100%;
    display: flex;
    flex-direction: row;
    place-items: center;
    gap: 0;
  }

  span {
    font-size: small;
    font-weight: 600;
  }

  .text {
    width: 30%;
    font-size: small;
  }

  .bar {
    width: 100%;
    height: 0.2px;
    background: darkgray;
    border: 1px solid darkgray;
  }

  .min-dot {
    width: 15px;
    height: 15px;
    position: relative;
    top: -6.5px;
    left: -4px;
    background-color: #ff5a60;
    border-radius: 50%;
  }

  .max-dot {
    width: 15px;
    height: 15px;
    position: relative;
    top: -6.5px;
    left: 97%;
    background-color: #ff5a60;
    border-radius: 50%;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.35);
`;
