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
        height: 43vw;
        width: 60vw;
    }

    @media screen and (max-width: 500px)
    {
        height: 46vw;
        width: 80vw;
    }

    @media screen and (max-width: 450px)
    {
        height: 55vw;
        width: 80vw;
    }

    @media screen and (max-width: 390px)
    {
        height: 65vw;
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

export const Table = styled.table`
    align-items: center;
    position: relative;
    width: 90%;
    margin: 20px;
    border-collapse: separate;
    border-spacing: 15px 25px;
    @media screen and (max-width: 1050px) {
        border-spacing: 10px 15px;
        margin: 8px;
    }
`

export const TableData = styled.td`
    background: #ffdbdb;
    font-size: 1.3rem;
    font-weight: 800;
    padding: 8px 15px;
    border-radius: 10px;
    @media screen and (max-width: 1150px) {
        font-size: 1.1rem;
        padding: 5px 8px;
    }

    @media screen and (max-width: 1050px) {
        font-size: 1rem;
        padding: 5px 8px;
    }

    @media screen and (max-width: 400px)
    {
        font-size: 0.75rem;
        padding: 5px 8px;
    }
`

export const TableHead = styled.th`
    text-align: center;
    background: #ffdbdb;
    font-size: 1.3rem;
    font-weight: 800;
    padding: 8px 15px;
    border-radius: 10px;
    @media screen and (max-width: 1150px) {
        font-size: 1.1rem;
        padding: 5px 8px;
    }

    @media screen and (max-width: 1050px) {
        font-size: 1rem;
        padding: 5px 8px;
    }

    @media screen and (max-width: 400px)
    {
        font-size: 0.75rem;
        padding: 5px 8px;
    }
`