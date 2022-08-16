import styled from 'styled-components'

export const Div = styled.div`
    @media screen and (min-width: 1024px) {
        margin-left: 5vw;
    }
    @media screen and (max-width: 1024px) {
        padding-top: 4vh;
    }
`

export const Div2 = styled.div`
    outline: none;
    width: 70vw;
    margin:auto;
    max-height:35vh;
    border: 4px solid #ef9b93;
    border-radius: 0 0 15px 15px;
    overflow: auto;
    padding: 2vh 2vw;
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

    @media screen and (min-width: 1024px)
    {
        width: 50vw;
        max-height:40vh;
    }
`

export const Top = styled.div`
    background: #ef9b93;
    border-radius: 15px 15px 0 0;
    width: 70vw;
    height: 4rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align:center;
    padding-top: 0.8rem;
    margin:auto;
    @media screen and (min-width: 1024px) {
        font-size: 1.4rem;
        width:50vw;
    }
`
export const InnerWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 2vh 3vw 8vh 0;

    @media screen and (max-width: 1050px) {
        width: 95%;
        margin: 2vh 1vw 5vh 0;
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
    @media screen and (max-width: 1024px) {
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
    padding: 1.5vh 0;
    border-radius: 10px;
    margin: auto;
    margin-top:10px;
    @media screen and (max-width: 1024px) {
        font-size: 2vw;
        width: 33.5%;
        height: 70%;
    }
`

export const ClockImage = styled.div`
    display: inline-block;
    width: 2vw;
    height: 100%;
    float: left;
    margin-left: 0.7vw;
    background: url(${process.env.PUBLIC_URL + '/clock.png'});
    background-position: center;
    background-size: 1.5vw;
    background-repeat: no-repeat;
    @media screen and (max-width: 1050px) {
        background-size: 2.1vw;
        width: 25%;
    }
`
export const CalenderImage = styled.div`
    display: inline-block;
    width: 2vw;
    height: 100%;
    float: left;
    margin-left: 0.7vw;
    background: url(${process.env.PUBLIC_URL + '/calendar.png'});
    background-position: center;
    background-size: 1.5vw;
    background-repeat: no-repeat;
    @media screen and (max-width: 1050px) {
        background-size: 2.2vw;
        width: 25%;
    }
`

export const Link = styled.a`
    text-decoration: none;
    color: black
`