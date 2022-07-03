import {
    ModalContainer,
    BackDrop,
    ModalTitle,
    ModalText,
    OkButton
} from "./ModalStyle";
import React from 'react'


const Modal = ({ Title, Text, onConfirm, btnText}) => {
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
                    <OkButton onClick={onConfirm}>{btnText}</OkButton>
                </footer>
            </ModalContainer>
        </BackDrop>
    );
};

export default Modal;