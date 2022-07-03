import styled from "styled-components";
import { OkButton } from '../Modal/ModalStyle'

const Container = styled.div`
    background-color: #2A2929;
    background-image: url(${process.env.PUBLIC_URL + '/background5.png'});
    width: 100%;
    min-height: 85vh;
    padding-top: 15vh;
    display: flex;
    flex-direction: row;
    background-size: cover;
    justify-content: center;

  @media screen and (max-width:600px){
    padding: 0;
    align-items: center;
  }
`;

const CenterContainer = styled.div`
  width: 50%;
  margin: auto;
  border-radius: 2vw;
  background:rgba(220, 219, 220, 0.2);
  border: 5px solid black;
  padding: 0;
  max-width: 1400px;
  text-align: center;
  overflow: hidden;

  & a {
    text-decoration: none;
  }

  @media screen and (max-width:600px){
    width: 70%;
    margin: 13vh auto;
  }
`;

const HeadingText = styled.h1`
  background-color: ${props => (props.paid === 1 && "#00af52") || (props.paid === 0 && "#AF0029")};
  padding: 1vw 0;
  color: black;
  margin: auto;
  font-size: 2.7vw;
  border: none;
  border-bottom: 4.5px solid black;

  @media screen and (max-width:860px){
    font-size: 3.9vw;
  }

  @media screen and (max-width:600px){
    font-size: 4.8vw;
  }
`;

const InfoText = styled.h3`
  color: black;
  margin: 1.5vw auto;
  font-size: 2.3vw;

  @media screen and (max-width:860px){
    font-size: 3.2vw;
    margin: 2vw auto;
  }

  @media screen and (max-width:600px){
    font-size: 4vw;
    margin: 4vw 2vw;
  }
`

const BackButton = styled(OkButton)`
  width: 30%;
  margin-top: 1rem;
  margin-bottom: 2vw;
  margin: 0 auto;
  color:black;
  font:bold;
  background-color: ${props => (props.paid === 1 && "#00af52") || (props.paid === 0 && "#AF0029")};
  margin-bottom: 3vw;

  @media screen and (max-width:860px){
    padding-top: .8vw;
    padding-bottom: .8vw;
    font-size: 2.4vw;
    width: 35%;
  }

  @media screen and (max-width:600px){
    font-size: 4vw;
    padding-top: 1vw;
    padding-bottom: 1vw;
    width: 38%;
  }
`

export {
    Container,
    CenterContainer,
    HeadingText,
    InfoText,
    BackButton
};