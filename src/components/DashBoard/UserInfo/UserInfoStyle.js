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
    margin:auto;
    border: 4px solid #ef9b93;
    border-radius: 0 0 15px 15px;
    padding: 3vh 2vw;
    ::-webkit-scrollbar
    {
        width: 8px;
        transition: all 0.4s ease;
        height: 8px;
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
        width: 55vw;
    }

    @media screen and (max-width: 390px)
    {
        width: 66vw;
    }
`

export const Top = styled.div`
    background: #ef9b93;
    border-radius: 15px 15px 0 0;
    width: 70vw;
    height: 4rem;
    font-size: 1.7rem;
    font-weight: bold;
    text-align:center;
    margin:auto;
    padding-top: 0.8rem;
    @media screen and (min-width: 1024px) {
        font-size: 1.4rem;
        width: 55vw;
    }

    @media screen and (max-width: 390px) {
        width: 66vw;
        font-size: 1.4rem;
    }
`

export const Table = styled.table`
    align-items: center;
    width: 100%;
    margin:auto;
    border-collapse: separate;
    border-spacing: 15px 25px;
    @media screen and (max-width: 1024px) {
        border-spacing: 10px 15px;
    }

    @media screen and (max-width: 390px) {
        width: 95%;
        margin-top: -1rem;
        margin-bottom: -1rem;
    }
`

export const TableData = styled.td`
    background: #ffdbdb;
    font-size: 1.3rem;
    font-weight: 800;
    padding: 8px 15px;
    border-radius: 10px;

    @media screen and (max-width: 1024px) {
        font-size: 1rem;
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
    width: 35%;
    @media screen and (max-width: 1024px) {
        font-size: 0.8rem;
        padding: 5px 8px;
        width: 40%;
    }
`