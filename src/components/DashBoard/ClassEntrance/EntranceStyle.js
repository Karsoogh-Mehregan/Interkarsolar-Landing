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
    overflow: auto;
    outline: none;
    width: 70vw;
    border: 4px solid #ef9b93;
    border-radius: 0 0 15px 15px;
    margin:auto;
    padding: 3vh 2vw;
    justify-content: center;
    @media screen and (min-width: 1024px)
    {
        width: 55vw;
    }
`

export const Top = styled.div`
    background: #ef9b93;
    border-radius: 15px 15px 0 0;
    width: 70vw;
    height: 4rem;
    font-size: 1.7rem;
    font-weight: bold;
    margin:auto;
    text-align:center;
    padding-top: 0.8rem;
    @media screen and (min-width: 1024px) {
        font-size: 1.4rem;
        width: 55vw;
    }
`

export const Img = styled.div`
    background-image: url(${process.env.PUBLIC_URL + '/helmet.png'});
    width: 10vw;
    height: 22vh;
    color: azure;
    background-position: center;
    background-size: 10vw;
    background-repeat: no-repeat;
    margin:auto;

    @media screen and (max-width: 1024px)
    {
        margin-top: -2rem;
    }

    @media screen and (max-width: 770px)
    {
        width: 11vw;
        background-size: 11vw;
    }

    @media screen and (max-width: 500px)
    {
        width: 15vw;
        background-size: 15vw;
    }

    @media screen and (max-width: 400px)
    {
        width: 15vw;
        background-size: 15vw;
    }
`

export const Par = styled.p`
    font-size: 1.9vw;
    font-weight: 800;
    color: azure;
    width: 20vw;
    text-align: center;
    margin: 3vh auto;

    @media screen and (max-width: 1024px)
    {
        margin: 2vh auto 2vh;
    }
`

export const Button = styled.a`
    color: azure;
    text-decoration: none;
    font-size: 1.9vw;
    font-weight: 800;
    background: rgb(69,31,88);
    padding: 0.4vw 7vw;
    border-radius: 20px;
    margin: auto;
    display: block;
    max-width:50%;
    @media screen and (max-width: 1024px) {
        font-size: 2.4vw;
    }

`