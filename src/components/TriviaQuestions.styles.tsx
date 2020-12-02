import styled from "styled-components";

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

export const TriviaAnswer = styled.button`
    margin: 3px 0;
    cursor:pointer;
    font-size:15px;
    position:relative;
    overflow:hidden;
    transition:0.22s color;
    user-select:none;
    border:1px solid #b6b6b6;
    background:#fff;

    :after{
        content:"";
        position:absolute;
        width:100%;
        height:100%;
        left:0;
        top:0;
        transition:0.22s opacity ease-out;
        background:#3498db;
        opacity:0;
    }
    :hover{
        color:#fff;
        border:1px solid #3498db;
    }

    :hover:after{
        opacity:1;
    }

    :active:after{
        background:#2980b9;
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
`;


export const TriviaCurrentQuestion = styled.div`
    margin-bottom:2px;
    font-size:16px;
    color:#606060;
`;

export const TriviaNextQuestionButton = styled.button`
    align-self:flex-end;
    display:inline-block;
    background:linear-gradient(90deg, #3498db, #2980b9);
    border-radius:7px;
    color:#fff;
    padding:9px 22px;
    cursor:pointer;
    user-select:none;
    border:none;
    font-size:16px;

    :hover{
        background:linear-gradient(45deg, #50b4f6, #2980b9);
    }

    :active{
        background:linear-gradient(40deg, #50b4f6, #275a7b);
    }

    :focus,:hover{
        outline:none;
    }
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