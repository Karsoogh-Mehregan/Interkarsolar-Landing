import styled from 'styled-components';
import { OkButton } from '../../components/Modal/ModalStyle'
export const Bg = styled.div`
    align-items: center;
    background-color: #650088;
    background-size: cover;
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
`
export const CenterContainer = styled.div`
    background-color: white;
    border-radius: 30px;
    box-shadow: 0px 10px 10px -2px rgb(50 1 66 / 50%);
    color: white;
    margin: auto;
    padding: 4vh 1vw;
    text-align: center;
    width: 50%;
    word-break:break-all;
    @media screen and (max-width: 768px){
        border-radius: 10px;
        border: 1px solid #C500FF;
        width: 80%;
    } 

`
export const FormContainer = styled.div`
    color: white;
    flex: 9;
    padding: 2vw 0px;
    word-break:break-all;
`;

export const InputContainer = styled.div`
    display: flex;
    margin-left: 3vw;
    margin-right: 3vw;
    margin-top:1vw;
    margin:2.5vh 3vw 1vh;
    @media screen and (max-width: 768px){
        margin-bottom: 0.1vw;
        margin-top:1vh;
  }
`
export const InputLabel = styled.div`
    color: #650485;
    flex: 2;
    font-size: 1.5vw;
    font-weight: 600;
    margin: auto;
    text-align: right;
    @media screen and (max-width: 768px){
        font-size: 2.8vw;
    }
`;

export const Input = styled.input`
    background-color: white;
    border-radius: 15px;
    border: 1px solid #650485;
    color: black;
    flex: 4;
    font-size: 1.2vw;
    font:bold;
    outline: none;
    padding: 6px 15px;
    text-align : ${props => props.id==="LEFT"?"left":"right"};
    @media screen and (max-width: 768px){
        font-size: 2.4vw;
    }
    &:placeholder { /* Most modern browsers support this now. */
        color:    #909;
    } 
`;   

export const SubmitButton = styled(OkButton)`
    background-color: #04C477;
    margin-bottom:1vh;
    @media screen and (max-width: 768px){
        font-size: 5vw;
    }
`
export const Title = styled.p`
    color: #650485;
    font-size: 2.5vw;
    font-weight: 900;
    letter-spacing: -0.01562em;
    line-height: 40px;
    margin: 0px 0px 56px 0px;
    text-shadow: 1px 1px #9906c9;
    @media screen and (max-width: 768px){
        font-size: 4vw;
    }
`
export const ErrorText = styled.div`
    color: red;
    font-size: 0.9vw;
    font-weight:500;
    margin: auto;
    padding-right: 16vw;
    text-align: right;
    width: 95%;
    @media screen and (max-width: 768px){
    font-size: 2.5vw;
    padding-right: 25vw;
    }
`;

export const SubmitText = styled.h2`
    color: #650485;
    font-size: 1vw;
    margin-top: 0;
    @media screen and (max-width: 768px){
        font-size: 2.5vw;
    }
`