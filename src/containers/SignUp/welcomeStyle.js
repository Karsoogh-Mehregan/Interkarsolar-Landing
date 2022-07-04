import styled from 'styled-components'

export const BgContainer = styled.div`
    align-items: center;
    background-color: #2A2929;
    background-image: url(${process.env.PUBLIC_URL + '/background5.png'});
    background-size: cover;
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    padding:0 5vw;
    width: 100%;
`
export const Astronaut = styled.img`
    margin-bottom:1rem;
    max-height : 73vh;
    max-width : 35vw;
    @media screen and (max-width:600px){
        display:none;
      }
`
export const RightContainer=styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 9;
    padding: 2vw 0px;
    text-align: center;
`
export const TextContainer = styled.h1`
    color:white;
    font-size : 275%;
    max-width:600px;
`
export const InputContainer = styled.input`
    background-color: transparent;
    border-radius: 2vh;
    border:0.2vw solid white;
    bottom:25%;
    color: white;
    font-size:150%;
    margin: 2vh 0 ;
    outline: none;
    padding:1% 2%;
    text-align: left; 
`
export const InputText = styled.h2`
    color:white;
    font-size : 200%;
    margin-bottom: 1vh;
`
export const Btn = styled.button`
    align-items: center;
    background-color: #B5179E; //primary color
    border-radius: 0.8vw;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    color: white;
    font-size: 200%;
    font-weight: normal;
    justify-content: center;
    line-height: 1.75;
    padding:0.5% 5%;
    &:hover {
    transform: scale(1.1);
    transition-duration: 0.1s;
    }
    @media screen and (max-width: 768px){
        border-radius: 2vw;
        padding: 1.5% 8%;
    }
`