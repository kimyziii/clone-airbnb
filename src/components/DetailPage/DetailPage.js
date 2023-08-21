/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import PriceModal from "./PriceModal";
import "react-calendar/dist/Calendar.css";
import ShareModal from "./ShareModal";

import * as S from "../../styles/DetailPage/DetailPage.style";
import StarIcon from "./icon/Star.svg";
import ShareIcon from "./icon/Share.svg";
import BinHeartIcon from "./icon/BinHeart.svg";
import HeartIcon from "./icon/Heart.svg";
import River from "./icon/river.svg";
import Task from "./icon/Task.svg";
import WaterPlay from "./icon/WaterPlay.svg";
import CancelDt from "./icon/CancelDt.svg";
import Flower from "./icon/Flower.svg";
import Beach from "./icon/Beach.svg";
import Kitchen from "./icon/Kitchen.svg";
import Mountain from "./icon/Mountain.svg";

import { useParams } from "react-router-dom";

const DetailPage = () => {
  //달력의 값 변경 및 초기화 적용
  const now = new Date();
  const [datevalue, setDateValue] = useState(now);
  const [datevalue2, setDateValue2] = useState(
    new Date(now.getFullYear(), now.getMonth() + 1)
  );

  // 좋아요 버튼에 따른 상태 변경
  const [likeBtn, setLikeBtn] = useState(false);
  const changeLikebtn = () => {
    if (!likeBtn) {
      alert("저장 되었습니다!");
    } else {
      alert("해제 되었습니다!");
    }

    setLikeBtn(!likeBtn);
  };
  // 공유하기 모달 기능 적용
  const [ModalOpen, setModalOpen] = useState(false);
  const openShareModal = () => {
    setModalOpen(true);
  };
  // 클릭에 따른 데이터 가지고 오기 param값 적용 전
  // const location = useLocation();
  // const detailData = { ...location.state };
  // console.log("key", detailData);

  // 파람값 전달받아 데이터 가져오기
  const param = useParams();

  const [detailData, setDetailData] = useState([]);

  const getItemData = () => {
    fetch("https://clone-airbnb-nine.vercel.app/data/airbnb.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setDetailData(data.data[param.itemId - 1]);
      });
  };
  useEffect(() => {
    getItemData();
  }, [detailData.length]);

  return (
    <>
      {ModalOpen && <ShareModal setModalOpen={setModalOpen} />}
      <S.SiteContent>
        <S.DetailWrap>
          <S.TitleDiv>
            <S.Title>{detailData.title}</S.Title>
            <S.SubTitle>
              <div>
                <S.StarImg src={StarIcon} />
                <S.SpanTag>4.88ㆍ</S.SpanTag>
                <S.ReviewBtn>후기 2개</S.ReviewBtn>
                <S.SpanTag>.</S.SpanTag>
                <S.SpanTag>Seo-myeon, Hongcheon, 강원도, 한국</S.SpanTag>
              </div>
              <S.ShareSave>
                <div onClick={openShareModal}>
                  <S.StarImg src={ShareIcon} />
                  <S.SpanTag>공유하기</S.SpanTag>
                </div>
                <div onClick={changeLikebtn}>
                  <S.StarImg src={likeBtn ? HeartIcon : BinHeartIcon} />
                  <S.SpanTag>저장하기</S.SpanTag>
                </div>
              </S.ShareSave>
            </S.SubTitle>
          </S.TitleDiv>
          <S.ImgArea>
            <div style={{ width: "60%" }}>
              <img
                style={{ width: "100%", height: "100%", paddingRight: "5px" }}
                src={detailData.img1}
              />
            </div>
            <div style={{ width: "40%", marginLeft: "5px" }}>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "220px",
                    marginBottom: "5px",
                  }}
                  src={detailData.img2 ? detailData.img2 : detailData.img1}
                />
              </div>
              <div>
                <img
                  style={{ width: "100%", height: "220px" }}
                  src={detailData.img3 ? detailData.img3 : detailData.img1}
                />
              </div>
            </div>
          </S.ImgArea>
          <S.HotalInfoWrap>
            <S.HotalInfo>
              <div className="info">
                <S.HostHotel>
                  <S.TitleArea>
                    <S.HostTitle>
                      {detailData.host} 님이 호스팅하는 펜션
                    </S.HostTitle>
                    <div className="hotelinfo">
                      <span>최대인원 {detailData.maxPeople}명</span>
                      <span>.</span>
                      <span>침실 1개</span>
                      <span>.</span>
                      <span>침대 1개</span>
                      <span>.</span>
                      <span>단독 사용 욕실 1개</span>
                    </div>
                  </S.TitleArea>
                  <S.HostImgArea>
                    <S.HostImg>
                      <img
                        src={detailData.img1}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </S.HostImg>
                  </S.HostImgArea>
                </S.HostHotel>
                <S.MainInfo>
                  <S.RoleDiv>
                    <div>
                      <S.IconImg src={Task} />
                    </div>
                    <div>
                      <S.RoleTitle>업무 전용 공간</S.RoleTitle>
                      <div>
                        와이파이가 제공되어 업무를 보기에 적합한 방입니다.
                      </div>
                    </div>
                  </S.RoleDiv>
                  <S.RoleDiv>
                    <div>
                      <S.IconImg src={WaterPlay} />
                    </div>
                    <div>
                      <S.RoleTitle>마음껏 물놀이를 즐기세요</S.RoleTitle>
                      <div>
                        해당 지역에서 수영장을 갖춘 몇 안 되는 숙소 중
                        하나입니다.
                      </div>
                    </div>
                  </S.RoleDiv>
                  <S.RoleDiv>
                    <div>
                      <S.IconImg src={CancelDt} />
                    </div>
                    <div>
                      <S.RoleTitle>
                        9월 2일 전까지 무료로 취소할 실 수 있습니다.
                      </S.RoleTitle>
                    </div>
                  </S.RoleDiv>
                </S.MainInfo>
                <S.HotelComment>
                  <S.BoldTitle>숙소 정보</S.BoldTitle>
                  <S.ContentBox>{detailData.detailText}</S.ContentBox>
                </S.HotelComment>
                <S.Facilities>
                  <S.BoldTitle>편의 시설</S.BoldTitle>
                  <S.FacilitiesDiv>
                    <div
                      className="facilities-info1"
                      style={{ alignContent: "center" }}
                    >
                      <S.IconImg src={River} />
                      <span>호수나 강과 인접</span>
                    </div>
                    <div className="facilities-info1">
                      <S.IconImg src={Flower} />
                      <span>정원 전망</span>
                    </div>
                    <div className="facilities-info1">
                      <S.IconImg src={Mountain} />
                      <span>산 전망</span>
                    </div>
                    <div className="facilities-info1">
                      <S.IconImg src={Beach} />
                      <span>해변과 인접</span>
                    </div>
                    <div className="facilities-info1">
                      <S.IconImg src={Kitchen} />
                      <span>주방</span>
                    </div>
                  </S.FacilitiesDiv>
                </S.Facilities>

                <div style={{ display: "flex" }}>
                  <Calendar onClickDay={setDateValue} value={datevalue} />
                  <Calendar onClickDay={setDateValue2} value={datevalue2} />
                </div>
              </div>
            </S.HotalInfo>
            <div className="modal" style={{ width: "40%" }}>
              <PriceModal
                price={detailData.price}
                maxCount={detailData.maxPeople}
              />
            </div>
          </S.HotalInfoWrap>
        </S.DetailWrap>
      </S.SiteContent>
    </>
  );
};

export default DetailPage;
