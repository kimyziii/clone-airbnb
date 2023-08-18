import styled from "styled-components";

export const Item = styled.div`
  height: 25rem;
  width: inherit;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.div`
  width: 90%;
  height: 70%;
  border-radius: 10px;
  background-size: cover; /* 배경 이미지 크기 조절 (가득 채우기) */
  background-position: center center; /* 배경 이미지 중앙 정렬 */
  margin-bottom: 15px;
`;

export const Inform = styled.div`
  width: 90%;
  height: 30%;
  overflow: hidden;
  gap: 10px;
`;

export const Title = styled.div`
  width: 100%;
  min-height: 3rem;
  max-height: 3rem;
  font-size: 0.9rem;
  align-self: baseline;
  overflow: hidden;
`;

export const Text = styled.div`
  width: 100%;
  min-height: 2rem;
  max-height: 2rem;
  height: 30%;
  color: gray;
  font-size: 0.8rem;
  align-self: baseline;
`;
