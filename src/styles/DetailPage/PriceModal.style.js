import styled from "styled-components";

export const ModalArea = styled.div`
  width: 64%;
  height: 400px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  margin: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  float: right;
`;

export const DetailInner = styled.div`
  padding: 10px;
`;

export const Divbox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const priceText = styled.span`
  font-weigth: bold;
  font-size: 24px;
`;

export const ReserveBtn = styled.button`
  width: 100%;
  background-color: #e41d59;
  padding: 10px 0px 10px 0px;
  text-align: center;
  border: none;
  border-radius: 5px;
  color: white;
  font-weigth: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Comment = styled.span`
  font-size: 14px;
`;
export const TotalInner = styled.div`
  border-top: 1px solid black;
  padding-top: 20px;
`;
