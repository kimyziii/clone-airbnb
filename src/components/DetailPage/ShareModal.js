import React from 'react';
import * as S from "../../styles/DetailPage/ShareModal.style";
import { useLocation } from 'react-router-dom';

const ShareModal = ({setModalOpen}) => {
    const closeModal = () => {
        setModalOpen(false);
    }

    // 클립 보드 복사 기능 생성 

    const location = useLocation();
    const baseUrl = 'http://localhost:3000';
    console.log(location);
    const handleCopyClipBoard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            alert("클립보드에 링크가 복사되었어요.");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
        <S.ShareWrap>
            <S.ShareArea>
                <S.CloseDiv>
                    <div>
                        <button onClick={()=> {closeModal()}}>X</button>
                    </div>
                </S.CloseDiv>
                <S.clipCopyDiv>
                    <S.PathAddr type="text" value={`${baseUrl}${location.pathname}`} readOnly></S.PathAddr>
                    <button onClick={() => {handleCopyClipBoard(`${baseUrl}${location.pathname}`)}}>클립보드 복사</button>
                </S.clipCopyDiv>
            </S.ShareArea>
        </S.ShareWrap>
            
        </>
    );
};

export default ShareModal;