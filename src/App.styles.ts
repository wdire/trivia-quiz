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

export const QuestionCorrect = styled.div`
    svg{
        color:#4BDB7D;
    }
`;

export const QuestionWrong = styled.div`
    svg{
        color:#FA614D;
    }
`;

export const QuestionProgress = styled.div`
    display:flex;
    margin-top:5px;
    margin-bottom:15px;

    ${QuestionCorrect},
    ${QuestionWrong}{
        height:24px;
        margin-right:2px;
    }

    svg{
        font-size:24px;
    }
`;

export const EndHeadText = styled.div`
    font-size:18px;
    font-weight:400;
`;

export const EndScore = styled.div`
    font-size:30px;
    font-weight:lighter;
    margin-bottom:10px;
`;

export const RestartGameButton = styled(BlueButton)`
    margin-top:15px;
`;