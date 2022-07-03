import styled from 'styled-components'

const ModalContainer = styled.div`
    background-color: #222;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40vw;
    z-index: 100;
    overflow: hidden;
    border-radius: 20px;
    @media screen and (max-width: 768px){
        border-radius: 10px;
        width: 55vw;
    }
    header {
        padding: 1vw;
        background-color:#00af52;
    }

    div {
        text-align: left;
        padding: 0 1vw;
        word-break: break-word;
        height: 20vh;
        overflow-y: auto;
        ::-webkit-scrollbar {
            width: 0.7em;
            height: 0.7em;
            @media screen and (max-width: 768px){
                width: 0.3em;
                height: 0.1em;
            }
          }
          
          ::-webkit-scrollbar-thumb {
            background-color: rgba(255,255,255,.1);
            border-radius: 3px;
          
            &:hover {
              background: rgba(255,255,255,.2);
            }
          }
        @media screen and (max-width: 768px){
            height: 9vh;
        }
    }
`

const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
    word-break: break-word;
    
`

const ModalTitle = styled.h2`
    font-size: 2.5vw;
    padding: 0;
    margin: 0;
    color: white;
    text-align:center;
    @media screen and (max-width: 500px){
        font-size: 4vw;
    }
`

const ModalText = styled.p`
    margin-left: 1.3vw;
    margin-right: 1.3vw;
    font-size: 1.7vw;
    color: white;
    @media screen and (max-width: 500px){
        font-size: 3vw;
    }
    text-align: center;
`

const OkButton = styled.button`
    background-color: #00af52;
    margin: 0 auto;
    width: 12vw;
    margin-bottom: 2vw;
    margin-top: 2vw;
    display: block;
    border: none;
    width: 50%;
    padding: 0.5vw 1vw;
    font-size: 2vw;
    color: white;
    border-radius: 20px;
    outline: none;
    transition-duration: 0.1s;
    &:hover {
        transform: scale(1.1);
    }
    @media screen and (max-width: 500px){
        font-size: 3vw;
    }
`

export {
    ModalContainer,
    BackDrop,
    ModalTitle,
    ModalText,
    OkButton
};