import styled from "styled-components";

export const ShareWrap = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: rgb(0, 0, 0); */
    z-index: 1;
    position: absolute;
`

export const ShareArea = styled.div`
    width: 400px;
    height: 600px;
    background-color: white;
    transform: translate(140%, 18%);
    padding: 30px;
    border: 1px solid black;
`

export const CloseDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;

`
export const clipCopyDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
`
export const PathAddr = styled.input`
    font-size: 16px;
    padding: 5px;
    margin-bottom: 17px;
`
