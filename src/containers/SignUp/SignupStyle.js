import styled from 'styled-components';
import { OkButton } from '../../components/Modal/ModalStyle'
export const Bg = styled.div`
    background-color: #650088;
    width: 100%;
    min-height: 85vh;
    padding-top: 15vh;
    background-size: cover;
`
export const CenterContainer = styled.div`
    width: 50%;
    border: 3px solid #C500FF;
    margin: auto;
    border-radius: 30px;
    text-align: center;
    padding: 1vw 0px;
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
    @media screen and (max-width: 768px){
        margin-bottom: 0.1vw;
        margin-top:0.1vw;
  }
`
export const InputLabel = styled.div`
    text-align: right;
    color: white;
    margin: auto;
    font-size: 1.3vw;
    flex: 2;
    @media screen and (max-width: 768px){
        font-size: 2.4vw;
    }
`;

export const Input = styled.input`
    flex: 4;
    text-align: right;
    background-color: white;
    border: 1px solid white;
    border-radius: 30px;
    color: black;
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
    
`