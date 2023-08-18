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
import HeartIcon from "./icon/Heart.svg"
import River from "./icon/river.svg";
import { useLocation, useParams } from "react-router-dom";
import { Params } from "react-router-dom";

const DetailPage = () => {
  //달력의 값 변경 및 초기화 적용
  const now = new Date();
  const [datevalue, setDateValue] = useState(now);
  // const [datevalue2, setDateValue2] = useState(
  //   new Date(now.getFullYear(), now.getMonth() + 1)
  // );

  // 좋아요 버튼에 따른 상태 변경
  const [likeBtn, setLikeBtn] = useState(false);
  const changeLikebtn = () => {
    alert('저장되었습니다!');
    setLikeBtn(!likeBtn);
  }
  // 공유하기 모달 기능 적용
  const [ModalOpen, setModalOpen] = useState(false);
  const openShareModal = () => {
    setModalOpen(true);
  }
  // 클릭에 따른 데이터 가지고 오기 param값 적용 전
  // const location = useLocation();
  // const detailData = { ...location.state };
  // console.log("key", detailData);

  // 파람값 전달받아 데이터 가져오기
  const param = useParams();

  const [detailData, setDetailData] = useState([]);

  const getItemData = () => {
    fetch('https://clone-airbnb-nine.vercel.app/data/airbnb.json',{
      method: 'GET',
    }).then(res => res.json())
    .then(data => {
      setDetailData(data.data[param.itemId-1]);
    })
  }
  useEffect(()=> {
    getItemData();
  },[detailData.length]);


  return (
    <>
    {ModalOpen && <ShareModal setModalOpen={setModalOpen} />}
      <S.SiteContent>
        <S.DetailWrap>
          <S.TitleDiv>
            <S.Title>
              {detailData.title}
            </S.Title>
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
                  <S.StarImg src={likeBtn ? HeartIcon:BinHeartIcon} />
                  <S.SpanTag>저장하기</S.SpanTag>
                </div>
              </S.ShareSave>
            </S.SubTitle>
          </S.TitleDiv>
          <S.ImgArea>
            <div style={{ width: "60%" }}>
              <img
                style={{ width: "100%", height: "450px", paddingRight: "5px" }} src={detailData.img1}/>
            </div>
            <div style={{ width: "40%", marginLeft: "5px" }}>
              <div>
                <img style={{ width: "100%", height: "220px", marginBottom: "5px", }}src={detailData.img2 ? detailData.img2:detailData.img1}
                />
              </div>
              <div>
                <img
                  style={{ width: "100%", height: "220px" }}
                  src={detailData.img3 ? detailData.img3:detailData.img1}
                />
              </div>
            </div>
          </S.ImgArea>
          <S.HotalInfoWrap>
            <S.HotalInfo>
              <div className="info">
                <S.HostHotel>
                  <S.TitleArea>
                    <S.HostTitle>{detailData.host} 님이 호스팅하는 펜션</S.HostTitle>
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
                      <div style={{ float: "right" }}>
                        <img
                          src="https://a0.muscache.com/im/pictures/user/101ad1e4-855e-4ea4-b3ff-5b6983731ff3.jpg?im_w=240"
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                    </S.HostImg>
                  </S.HostImgArea>
                </S.HostHotel>
                <S.MainInfo>
                  <div className="role1" style={{ display: "flex" }}>
                    <div>
                      <img
                        src="https://a0.muscache.com/im/pictures/user/101ad1e4-855e-4ea4-b3ff-5b6983731ff3.jpg?im_w=240"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </div>
                    <div>
                      <h3>마음껏 물놀이를 즐기세요</h3>
                      <span>
                        해당 지역에서 수영장을 갖춘 몇 안 되는 숙소 중
                        하나입니다.
                      </span>
                    </div>
                  </div>
                  <div className="role2" style={{ display: "flex" }}>
                    <div>
                      <img
                        src="https://a0.muscache.com/im/pictures/user/101ad1e4-855e-4ea4-b3ff-5b6983731ff3.jpg?im_w=240"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </div>
                    <div>
                      <h3>마음껏 물놀이를 즐기세요</h3>
                      <span>
                        해당 지역에서 수영장을 갖춘 몇 안 되는 숙소 중
                        하나입니다.
                      </span>
                    </div>
                  </div>
                  <div className="role3" style={{ display: "flex" }}>
                    <div>
                      <img
                        src="https://a0.muscache.com/im/pictures/user/101ad1e4-855e-4ea4-b3ff-5b6983731ff3.jpg?im_w=240"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </div>
                    <div>
                      <h3>마음껏 물놀이를 즐기세요</h3>
                      <span>
                        해당 지역에서 수영장을 갖춘 몇 안 되는 숙소 중
                        하나입니다.
                      </span>
                    </div>
                  </div>
                </S.MainInfo>
                <S.HotelComment>
                  <span>
                    타샤의정원펜션은 경치가 아름다운 청정지역 홍천강앞에 접해
                    있습니다 아름다운경치와 분위기있는 시설,스파,수영장등
                    편의시설이 갖추어져있습니다 홍천강의 아름다운 경치
                    조망,퀸침대 1개가 설치된 기준인원 2인용 최대인원 3인
                    커플,가족용 객실입니다 (인원 추가 비용 2만원,최대인원 초과
                    호스트문의) 게스트 이용 가능 공간/시설 멋있는 정원과
                    홍천강의 경치가 어울러진 숙소입니다. 객실앞 테라스에서 개별
                    바베큐를 하실 수 있습니다. 분위기 있는 야외바베큐장도
                    있습니다 우천시나 겨울에는 따듯한 실내 바베큐장이 있으며
                    비용은 2인기준 2만원이며 인원 추가 5천원 전기그릴 사용. 기타
                    주의사항 객실비품 KT tv, wifi, 전기벽난로, 에어컨, 옷걸이,
                    냉장고, 전기밥솥, 전자렌지(공용),주방시설,식기일체, 삼푸,
                    비누, 치약, 헤어 드라이기, 수건,소금 후추 등 기초양념
                  </span>
                </S.HotelComment>
                <S.Facilities>
                  <h3>편의 시설</h3>
                  <div
                    className="facilities-info1"
                    style={{ alignContent: "center" }}
                  >
                    <img
                      src={River}
                      style={{ width: "30px", height: "30px" }}
                    />
                    <span>호수나 강과 인접</span>
                  </div>
                  <div className="facilities-info1">
                    <img
                      src="https://a0.muscache.com/im/pictures/user/101ad1e4-855e-4ea4-b3ff-5b6983731ff3.jpg?im_w=240"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <span>호수나 강과 인접</span>
                  </div>
                  <div className="facilities-info1">
                    <img
                      src="https://a0.muscache.com/im/pictures/user/101ad1e4-855e-4ea4-b3ff-5b6983731ff3.jpg?im_w=240"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <span>호수나 강과 인접</span>
                  </div>
                  <div className="facilities-info1">
                    <img
                      src="https://a0.muscache.com/im/pictures/user/101ad1e4-855e-4ea4-b3ff-5b6983731ff3.jpg?im_w=240"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <span>호수나 강과 인접</span>
                  </div>
                  <div className="facilities-info1">
                    <img
                      src="https://a0.muscache.com/im/pictures/user/101ad1e4-855e-4ea4-b3ff-5b6983731ff3.jpg?im_w=240"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <span>호수나 강과 인접</span>
                  </div>
                  <div className="facilities-info1">
                    <img
                      src="https://a0.muscache.com/im/pictures/user/101ad1e4-855e-4ea4-b3ff-5b6983731ff3.jpg?im_w=240"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <span>호수나 강과 인접</span>
                  </div>
                </S.Facilities>

                <div>
                  <Calendar onchange={setDateValue} value={datevalue} />
                  <Calendar />
                </div>
              </div>
            </S.HotalInfo>
            <div className="modal" style={{ width: "40%" }}>
              <PriceModal />
            </div>
          </S.HotalInfoWrap>
        </S.DetailWrap>
      </S.SiteContent>
    </>
  );
};

export default DetailPage;
