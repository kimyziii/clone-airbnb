import React from 'react';

const ShareModal = ({setModalOpen}) => {
    const closeModal = () => {
        setModalOpen(false);
    }
    return (
        <>
        <div style={{width:"100vw",height:"100vh", backgroundColor:"rgba(0,0,0,20)", zIndex:1,position:"absolute",}}>
            <div style={{width: "100px", height:"100px", backgroundColor:'white',  transform: "translate(50%, 50%)"}}>
                <button onClick={closeModal}>X</button>
            </div>
        </div>
            
        </>
    );
};

export default ShareModal;