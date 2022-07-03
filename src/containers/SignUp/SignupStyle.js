import styled from 'styled-components';
import { OkButton } from '../../components/Modal/ModalStyle'
export const Bg = styled.div`
    background-color: #650088;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-size: cover;
`
export const CenterContainer = styled.div`
    width: 50%;
    border: 3px solid #C500FF;
    margin: auto;
    border-radius: 30px;
    text-align: center;
    padding: 4vh 1vw;
    color: white;
    word-break:break-all;
    @media screen and (max-width: 768px){
        border: 1px solid #C500FF;
        border-radius: 10px;
        width: 80%;
    } 

`
export const FormContainer = styled.div`
    flex: 9;
    padding: 2vw 0px;
    color: white;
    word-break:break-all;
`;

export const InputContainer = styled.div`
    display: flex;
    margin-right: 3vw;
    margin-left: 3vw;
    margin-top:1vw;
    margin:2.5vh 3vw 1vh;
    @media screen and (max-width: 768px){
        margin-bottom: 0.1vw;
        margin-top:1vh;
  }
`
export const InputLabel = styled.div`
    text-align: right;
    color: white;
    margin: auto;
    font-size: 1.5vw;
    font-weight: 600;
    flex: 2;
    @media screen and (max-width: 768px){
        font-size: 2.8vw;
    }
`;

export const Input = styled.input`
    flex: 4;
    text-align : ${props => props.id==="LEFT"?"left":"right"};
    background-color: white;
    border: 1px solid white;
    border-radius: 30px;
    color: #650088;
    padding: 6px 6px;
    font-size: 1.2vw;
    font:bold;
    outline: none;
    @media screen and (max-width: 768px){
        font-size: 2.4vw;
    }
    &:placeholder { /* Most modern browsers support this now. */
        color:    #909;
    } 

    `;   

export const SubmitButton = styled(OkButton)`
    background-color: #04C477;
    margin-bottom:2vh;
    @media screen and (max-width: 768px){
        font-size: 5vw;
        margin-bottom:1vh;
    }
`
export const Title = styled.p`
    margin: 0px 0px 56px 0px;
    text-shadow: 1px 1px #412c7d;
    font-weight: 900;
    font-size: 2.5vw;
    line-height: 40px;
    letter-spacing: -0.01562em;
    @media screen and (max-width: 768px){
        font-size: 4vw;
    }
`
export const ErrorText = styled.div`
color: red;
width: 95%;
text-align: right;
font-size: 0.9vw;
font-weight:500;
margin: auto;
padding-right: 16vw;
@media screen and (max-width: 768px){
  font-size: 2.5vw;
  padding-right: 25vw;
}
`;

export const SubmitText = styled.h2`
    font-size: 1vw;
    @media screen and (max-width: 768px){
        font-size: 2.5vw;
    }
`