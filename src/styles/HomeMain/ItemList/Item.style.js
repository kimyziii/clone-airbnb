import styled from "styled-components";

export const Item = styled.div`
  height: 22rem;
  width: inherit;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.div`
  width: 90%;
  height: 100%;
  border-radius: 10px;
  background-size: cover; /* 배경 이미지 크기 조절 (가득 채우기) */
  background-position: center center; /* 배경 이미지 중앙 정렬 */
  margin-bottom: 15px;
`;

export const Title = styled.div`
  // width: 300px;
  // white-space: nowrap;
  // text-overflow: ellipsis;
  // overflow: hidden;
  // font-size: 0.9rem;
  // align-self: baseline;
  // margin-left: 1.2rem;
  font-size: 0.9rem;
  align-self: baseline;
  margin-left: 1.2rem;
`;

export const Text = styled.div`
  color: gray;
  font-size: 0.8rem;
  align-self: baseline;
  margin-left: 1.2rem;
`;
