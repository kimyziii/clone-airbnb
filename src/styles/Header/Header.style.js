import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  padding: 0 4rem;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 1;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 2rem;
  width: 12rem;
`;

export const SearhModal = styled.div`
  width: 40rem;
  height: 4rem;
  position: relative;
  top: 1rem;
  left: -15rem;
  background-color: lightgray;
  border-radius: 5rem;
`;

// -------------------------------------
export const NewWrapper = styled.div`
  background-color: white;
  padding: 2.5rem 4rem 0 4rem;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid lightgray;
  border: 1px solid blue;
  position: fixed;
  top: 7rem;
  right: 0px;
  left: 0px;
  z-index: 1;
`;

export const NewSearchWrapper = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 1px solid red;
`;

export const NewSearch = styled.div`
  width: 35%;
  height: 2.5rem;
  border: 1px solid lightgray;
  border-radius: 4rem;

  display: flex;
  gap: 10px;
  align-items: center;

  div {
    position: relative;
    font-size: small;
    left: 20px;
    cursor: pointer;

    &:nth-last-of-type(1) {
      margin-right: 1rem;
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

  display: flex;
`;

export const NewSearchModalLocationWrapper = styled.div`
  position: relative;
  width: 40%;
  height: 3rem;
`;

export const NewSearchModalLocation = styled.div`
  border: 2px solid black;
  height: 3rem;
  position: relative;
  top: -2px;
  left: -2px;
  width: 100%;
  border-radius: 1.5rem;
  background-color: white;

  display: flex;
  flex-direction: column;
  font-size: x-small;

  label {
    margin-left: 15px;
    margin-top: 6px;
    font-weight: 800;
  }

  input {
    width: 80%;
    margin-left: 15px;
    margin-top: 7px;
    border: none;
  }
`;
export const NewSearchModalLocationModal = styled.div`
  border: 1px solid green;
  height: 18rem;
  width: 160%;
  margin-top: 12px;
  border-radius: 2rem;
`;
export const NewSearchModalPriceWrapper = styled.div`
  position: relative;
  width: 40%;
  height: 3rem;
`;
export const NewSearchModalPrice = styled.div`
  border: 2px solid red;
  height: 3rem;
  position: relative;
  top: -2px;
  left: 2px;
  width: 100%;
  border-radius: 1.5rem;
  background-color: white;

  display: flex;
  flex-direction: row;
  font-size: x-small;
`;

export const NewSearchModalPriceType = styled.div`
  width: 50%;
  border: 1px solid yellow;
  height: 97%;
  border-radius: 2rem;

  label {
    font-size: x-small;
    font-weight: 800;
    position: fixed;
    margin: 5px 10px;
  }

  input {
    width: 70%;
    margin-left: 10px;
    margin-top: 18px;
    border: none;
  }
`;
export const NewSearchModalPriceModal = styled.div`
  border: 1px solid brown;
  height: 10rem;
  width: 200%;
  margin-top: 12px;
  border-radius: 2rem;

  position: relative;
  left: -50%;
`;
