import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 47vW;
    margin-left: 9vw;

    @media screen and (max-width: 770px)
    {
        bottom: 25vh;
        right: 21vw;
    }

    @media screen and (max-width: 500px)
    {
        bottom: 25vh;
        right: 11vw;
    }
`

export const Div2 = styled.div`
    outline: none;
    display: block;
    width: 47.4vW;
    height: 28vw;
    border: 4px solid #ef9b93;
    border-radius: 0 0 15px 15px;
    overflow: auto;

    ::-webkit-scrollbar
    {
        width: 8px;
        transition: all 0.4s ease;
    }

    ::-webkit-scrollbar-thumb
    {
        border-radius: 8px;
        background: #fff;
    }

    ::-webkit-scrollbar-thumb:hover
    {
        background: #beddea;
    }

    ::-webkit-scrollbar-track
    {
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:window-inactive
    {
        background: rgba(100, 100, 100, 0.4);
    }

    @media screen and (max-width: 770px)
    {
        height: 30vw;
        width: 60vw;
    }

    @media screen and (max-width: 700px)
    {
        height: 35vw;
        width: 60vw;
    }

    @media screen and (max-width: 600px)
    {
        height: 43vw;
        width: 60vw;
    }

    @media screen and (max-width: 500px)
    {
        height: 46vw;
        width: 80vw;
    }
`

export const Top = styled.div`
    background: #ef9b93;
    border-radius: 15px 15px 0 0;
    width: 47.4vW;
    height: 4rem;
    top: 1rem;
    font-size: 1.8rem;
    font-weight: bold;
    text-align:center;
    padding-top: 0.8rem;
    @media screen and (max-width: 1050px) {
        font-size: 1.4rem;
        height: 3rem;
    }

    @media screen and (max-width: 770px)
    {
        width: 60vw;
    }

    @media screen and (max-width: 500px)
    {
        width: 80vw;
    }
`
export const InnerWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: 2vh 3vw 8vh 0;

    @media screen and (max-width: 1050px) {
        width: 95%;
        margin: 2vh 1vw 8vh 0;
    }
`

export const HeadDiv = styled.div`
    width: 100%;
    background: rgb(44, 17, 63);
    color: azure;
    font-size: 1.5vw;
    font-weight: bold;
    text-align: center;
    padding: 8px 0;
    border-radius: 10px;
    @media screen and (max-width: 1050px) {
        font-size: 1.7vw;
    }

    @media screen and (max-width: 770px) {
        font-size: 2.2vw;
    }

    @media screen and (max-width: 600px) {
        font-size: 2.5vw;
    }

    @media screen and (max-width: 500px) {
        font-size: 3vw;
    }
`

export const DataWrapperDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 6vh;
`

export const Data = styled.div`
    width: 33%;
    height: 100%;
    background: rgb(255, 219, 219);
    font-size: 1.3vw;
    font-weight: bold;
    text-align: center;
    color: black;
    padding: 8px 0;
    border-radius: 10px;
    margin: 10px;
    @media screen and (max-width: 1050px) {
        font-size: 1.4vw;
        width: 33.5%;
    }

    @media screen and (max-width: 770px) {
        font-size: 2vw;
    }

    @media screen and (max-width: 600px) {
        font-size: 2.4vw;
    }

    @media screen and (max-width: 500px) {
        font-size: 2.9vw;
    }
`

export const ClockImage = styled.div`
    display: inline-block;
    width: 20%;
    height: 100%;
    float: left;
    margin-left: 10px;
    background: url(${process.env.PUBLIC_URL + '/clock.png'});
    background-position: center;
    background-size: 1.7vw;
    background-repeat: no-repeat;
    @media screen and (max-width: 1050px) {
        background-size: 2vw;
        width: 25%;
    }
`
export const CalenderImage = styled.div`
    display: inline-block;
    width: 20%;
    height: 100%;
    float: left;
    margin-left: 10px;
    background: url(${process.env.PUBLIC_URL + '/calendar.png'});
    background-position: center;
    background-size: 2vw;
    background-repeat: no-repeat;
    @media screen and (max-width: 1050px) {
        background-size: 2.6vw;
        width: 25%;
    }
`

export const Link = styled.a`
    text-decoration: none;
    color: black
`