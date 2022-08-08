import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 47vW;
    margin-left: 9vw;
`

export const Div2 = styled.div`
    outline: none;
    display: block;
    width: 47.4vW;
    height: 30.5vw;
    border: 4px solid #ef9b93;
    border-radius: 0 0 15px 15px;
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
`

export const Table = styled.table`
    align-items: center;
    position: relative;
    width: 90%;
    margin: 20px;
    border-collapse: separate;
    border-spacing: 15px 25px;
    @media screen and (max-width: 1050px) {
        width: 90%;
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
    @media screen and (max-width: 1050px) {
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
    @media screen and (max-width: 1050px) {
        font-size: 1rem;
        padding: 5px 8px;
    }
`