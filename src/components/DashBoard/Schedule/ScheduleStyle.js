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