import {
    ModalContainer,
    BackDrop,
    ModalTitle,
    ModalText,
    OkButton
} from "./ModalStyle";
import React from 'react'


const Modal = ({ Title, Text, onConfirm }) => {
    return (
        <BackDrop>
            <ModalContainer>
                <header>
                    <ModalTitle>{Title}</ModalTitle>
                </header>
                <div>
                    <ModalText>{Text}</ModalText>
                </div>
                <footer>
                    <OkButton onClick={onConfirm}>ثبت نام</OkButton>
                </footer>
            </ModalContainer>
        </BackDrop>
    );
};

export default Modal;