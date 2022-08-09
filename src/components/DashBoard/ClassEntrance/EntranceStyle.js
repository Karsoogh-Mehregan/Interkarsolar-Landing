import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 47vW;
    margin-left: 9vw;
    
    @media screen and (max-width: 770px)
    {
        bottom: -5vh;
        right: 21vw;
    }

    @media screen and (max-width: 500px)
    {
        bottom: -5vh;
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
        height: 36vw;
        width: 60vw;
    }

    @media screen and (max-width: 550px)
    {
        height: 43vw;
        width: 60vw;
    }

    @media screen and (max-width: 500px)
    {
        height: 43vw;
        width: 68vw;
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
        width: 68vw;
    }
`

export const Img = styled.div`
    position: relative;
    background-image: url(${process.env.PUBLIC_URL + '/helmet.png'});
    width: 10vw;
    height: 22vh;
    color: azure;
    background-position: center;
    background-size: 10vw;
    background-repeat: no-repeat;
    top: 5vh;
    right: 17vw;
    @media screen and (max-width: 1050px) {
        top: 0;
    }

    @media screen and (max-width: 770px)
    {
        width: 11vw;
        background-size: 11vw;
        right: 8vw;
    }

    @media screen and (max-width: 500px)
    {
        width: 15vw;
        background-size: 15vw;
        right: 8vw;
        top: -2vw;
    }

    @media screen and (max-width: 400px)
    {
        width: 15vw;
        background-size: 15vw;
        right: 8vw;
        top: -6vw;
    }
`

export const Par = styled.p`
    position: relative;
    font-size: 2.1vw;
    font-weight: 800;
    color: azure;
    width: 20vw;
    top: 1vw;
    right: 12vw;
    text-align: center;
    @media screen and (max-width: 1050px) {
        top: -3vw;
    }

    @media screen and (max-width: 770px)
    {
        right: 1vw;
        font-size: 2.4vw;
        width: 25vw;
    }

    @media screen and (max-width: 500px)
    {
        right: 1vw;
        font-size: 3vw;
        width: 30vw;
        top: -9vw;
    }

    @media screen and (max-width: 400px)
    {
        right: 1vw;
        font-size: 3.4vw;
        width: 35vw;
        top: -15vw;
    }
`

export const Button = styled.a`
    position: relative;
    color: azure;
    text-decoration: none;
    font-size: 2vw;
    font-weight: 800;
    right: 9vw;
    background: rgb(69,31,88);
    padding: 0.4vw 8vw;
    border-radius: 20px;
    @media screen and (max-width: 1050px) {
        bottom: 7vh;
    }

    @media screen and (max-width: 770px) {
        bottom: 20vh;
        right: 25vw;
        font-size: 2.4vw;
    }

    @media screen and (max-width: 400px) {
        bottom: 22vh;
        right: 30vw;
        font-size: 3vw;
    }
`