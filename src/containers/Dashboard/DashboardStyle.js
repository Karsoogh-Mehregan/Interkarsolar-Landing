import styled from 'styled-components'

export const BgContainer = styled.div`
    align-items: center;
    background-image: url(${process.env.PUBLIC_URL + '/bgpanel.png'});
    background-position: center;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    padding-top: 15vh;
    display: flex;
    flex-direction: row;

`
export const RightContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 9;
    text-align: center;
    @media screen and (max-width: 770px) {
        position: absolute;
        top: 10vh;
        right: 35vw;
    }

    @media screen and (max-width: 500px) {
        position: absolute;
        top: 9vh;
        right: 30vw;
    }
`
export const TabCard = styled.button`
    background-color: #6B2181;
    width: 30vw;
    padding: 12px;
    padding-left: 20px;
    margin: 2vh 1vw 2vh 2vw;
    border:none;
    border-radius: 15px;

    color:white;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    &:hover {
        transform: scale(1.05);
        transition-duration: 0.2s;
        transition-timing-function: ease;
        cursor: pointer;
        }

    &:active {
        transform: scale(0.95);
        transition-duration: 0.2s;
        transition-timing-function: ease;
        }
    
    @media screen and (max-width: 1050px) {
        width: 22vw;
        margin-top: 1vh;
        margin-bottom: 1vh;
        padding-left: 10px;
        font-size: 17px;
    }

    @media screen and (max-width: 770px) {
        width: 28vw;
        font-size: 17px;
    }

    @media screen and (max-width: 500px) {
        width: 40vw;
        font-size: 17px;
    }
`