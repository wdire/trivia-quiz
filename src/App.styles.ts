import styled, { createGlobalStyle } from 'styled-components';
import { colors, BlueButton } from "./components/General.styles";

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
    max-width:100%;
    width:450px;
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

export const StartButton = styled(BlueButton)`
    padding:10px 28px;
`;