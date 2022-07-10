import {
    BackDrop,
    ModalContainer,
    ModalText,
    ModalTitle,
    OkButton,
} from "./ModalStyle";

import React from 'react'

const Modal = ({ Title, Text, onConfirm, btnText, color}) => {
    return (
        <BackDrop>
            <ModalContainer cl={color}>
                <header>
                    <ModalTitle>{Title}</ModalTitle>
                </header>
                <div>
                    <ModalText>{Text}</ModalText>
                </div>
                <footer>
                    <OkButton onClick={onConfirm} cl={color}>{btnText}</OkButton>
                </footer>
            </ModalContainer>
        </BackDrop>
    );
};

export default Modal;