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
}`
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
        transition-duration: 0.1s;
        }
    @media screen and (max-width: 1050px) {
        width: 62vw;
        margin-top: 1vh;
        margin-bottom: 1vh;
        padding-left: 10px;
    }
`;
