import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Nav = styled.nav`
    background: black;
    height:7vh;
    padding:8px 0;
    position:absolute;
    width:100vw;
    top:0;
    display: flex;
    flex-direction: row;

    //can not select link
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;          /* Likely future */  
`
export const NavBtn = styled.nav`
    float:left;
    margin:auto;
    margin-left:100px;
    &:hover {
        transform: scale(1.05);
        transition-duration: 0.1s;
        }

    &:active {
        transform: scale(0.95);
        transition-duration: 0.1s;
        }

    @media screen and (max-width:1024px){
        margin-left:25px;
    }
`

export const NavBtnLink = styled(LinkR)`
    float:left;
    background-color:${props => props.bg};
    border: 3px solid ${props => props.bg};
    border-radius: 15px;
    
    color: #FFFFFF;
    cursor:pointer;
    font-weight: bold;
    font-size:0.9vw;
    height:3vh;
    margin:0.5vw;
    outline:none;
    padding:1.5vh 3vw;
    text-decoration: none;
    text-align:center;
    transition : all 0.2s ease-in-out;
    white-space:nowrap;    
    width:5.7vw;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover{
        background: ${props => props.bg};
        color: #000000;
        transition: all 0.2s ease-in-out;
    }
    @media screen and (max-width:1024px){
        width: 14vw;
        font-size:2.2vw;
        border-radius: 10px;
    }
   
`
// export const Logo = styled.div`
//     margin-bottom: -5px;
//     background-image: url(${Logoimg});
//     background-repeat: no-repeat;
//     float:left;
//     height:92%;
//     width:150px;
//     background-size: contain;
//     margin-left:8vw;
// `