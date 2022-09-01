import styled from 'styled-components'

export const BgContainer = styled.div`
    align-items: center;
    background-image: url(${process.env.PUBLIC_URL + '/bgpanel.png'});
    background-position: center;
    background-size: cover;
    width: 100vw;
    min-height: 100vh;
    padding-top: 12vh;
    @media screen and (min-width: 1024px) {
        display: flex;
        flex-direction: row;
    }
    @media screen and (max-width: 1024px) {
        padding-top: 45vh;
    }
`
export const RightContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: auto;
    text-align: center;
    flex: 9;
    text-align: center;
`
export const TabCard = styled.button`
    background-color: #6B2181;
    width: 30vw;
    padding: 15px;
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

    @media screen and (max-width: 768px) {
        width: 65vw;
        font-size: 17px;
    }
`