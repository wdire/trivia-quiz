import styled, { createGlobalStyle } from 'styled-components';
import { colors } from "./general";

export const GlobalStyle = createGlobalStyle`
    html{
        height:100%;
    }

    body{
        font-family:"Roboto", Arial, Helvetica, sans-serif;
        margin:0;
        padding:0;
        color:${colors.blackGray};
    }

    *{
        box-sizing:border-box;
    }
`;

export const Main = styled.div`
    margin:0 auto;
    width:500px;
`;
 
export const Wrapper = styled.div`
    border-radius:10px;
    padding:22px;
    margin-top:45px;
    border:1px solid #ccc;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);

    h1{
        font-size:32px;
        margin:0;
        margin-bottom:10px;
        font-weight:lighter;
        display:inline-block;
    }

`;

export const StartButton = styled.button`
    background:linear-gradient(90deg, #3498db, #2980b9);
    font-weight:lighter;
    border-radius:10px;
    border:none;
    padding:10px 28px;
    color:#fff;
    font-size:16px;
    cursor:pointer;

    transition:1s background;

    :hover{
        background:linear-gradient(45deg, red, #2980b9);
    }

    :focus,:hover{
        outline:none;
    }
`;