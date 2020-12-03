import styled, { css } from "styled-components";
import { BlueButton } from "./General.styles";

export const TriviaQuestionsWrapper = styled.div`
    display:flex;
    flex-direction:column;
`;

export const TriviaQuestion = styled.div`
    margin-bottom:10px;
    font-size:18px;
`;

export const TriviaAnswersGroup = styled.div`
    display:flex;
    flex-direction:column;
`;

interface TriviaAnswerProps{
    correct:boolean;
    userClicked:boolean;
    answered:boolean;
}

export const TriviaAnswer = styled.button<TriviaAnswerProps>`
    margin: 3px 0;
    font-size:15px;
    position:relative;
    overflow:hidden;
    transition:0.22s color;
    user-select:none;
    border:1px solid #b6b6b6;
    transition:0.22s background ease-out;
    background: ${({correct, userClicked}) => 
        correct
            ? "#4BDB7D"
            : !correct && userClicked
                ? "#FA614D"
                : "#fff"
    };

    :hover{
        ${ props => (!props.answered) && css`
            color:#fff;
            background:#3498db;
            border:1px solid #3498db;
        `}
    }

    :active{
        ${ props => (!props.answered) && css`
            background:#2980b9;
        `}
    }

    :focus,:hover{
        outline:none;
    }
`;

export const TriviaAnswerButton = styled.div`
    text-align:center;
    display:block;
    position:relative;
    padding: 10px 15px;
    z-index:10;
    cursor:pointer;
`;


export const TriviaCurrentQuestion = styled.div`
    margin-bottom:2px;
    font-size:16px;
    color:#606060;
`;

export const TriviaNextQuestionButton = styled(BlueButton)`
    
`;

export const TriviaAnswerInput = styled.input.attrs(props => ({
    type:"radio"
}))`
    display:none;
`;

export const TriviaBottom = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:10px;
`;

export const TriviaQuestionCategory = styled.div`
    align-self:flex-end;
    color:#999999;
`;

export const TriviaErrorDesc = styled.div`
    line-height: 1.4em;
    font-size: 16px;
`;