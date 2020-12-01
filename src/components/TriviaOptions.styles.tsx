import styled, { css, keyframes } from 'styled-components';
import { colors } from "./General.styles";

const optionsSettingButtonSize = "24px";
const optionsMenuColor = "#eee";
const optionsSelectButtonColor = "#aaa";

export const TriviaOptionsWrapper = styled.div`
    margin-bottom:15px;
`;

export const TriviaOptionsTextWrapper = styled.div`
    display:flex;
    font-size:16px;
    display:flex;
    align-items:center;
`;

export const TriviaOptionsButton = styled.div<{active:boolean;}>`
    height:${optionsSettingButtonSize};
    margin-left:10px;
    cursor:pointer;
    color:inherit;
    transition:0.2s color, 0.2s transform;
    ${ props => props.active && css`
        transform:rotate(40deg);
    ` }

    svg{
        font-size:${optionsSettingButtonSize};
    }

    :hover{
        color:${colors.blackGrayHover};
    }
`;

const anim = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-20px);
    }
`;

const height = document.querySelector("body");

interface triviaOptionsMenuWrapperProps {
    active:boolean;
    valHeight:number | undefined;
}

export const TriviaOptionsMenuWrapper = styled.div<triviaOptionsMenuWrapperProps>`
    margin-top:7px;
    background:${optionsMenuColor};
    border-radius:6px;
    transition:0.5s max-height;
    max-height:${ props => props.active ? props.valHeight + "px" : "0px"};
    overflow:hidden;
`;

export const TriviaOptionsMenu = styled.div`
    padding:15px 10px;
    max-height:550px;
    overflow-y:auto;
`;

export const TriviaOptionsMenuButtonGroup = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-bottom:10px;
`;

interface triviaOptionsSelectProps {

}

export const TriviaOptionsSelect = styled.div<triviaOptionsSelectProps>`
    input[type=radio]{
        display:none;
    }

`;

export const TriviaOptionsSelectInput = styled.input.attrs(props => ({
    type:"radio"
}))``;

interface TriviaOptionsMenuHeader {
    fontSize:string;
}

export const TriviaOptionsMenuHeader = styled.div<TriviaOptionsMenuHeader>`
    margin-left:5px;
    margin-bottom:4px;
    font-weight:600;
    font-size:${props => props.fontSize ? props.fontSize : "18px"};
`;

export const TriviaOptionsSelectButton = styled.div`
    font-size:12px;
    padding:8px 16px;
    border-radius:6px;
    background:transparent;
    color:#202020;
    border:1px solid #aaa;
    margin:4px;
    cursor:pointer;

    ${TriviaOptionsSelectInput}:checked + &{
        color:#fff;
        border:1px solid ${optionsSelectButtonColor};
        background:${optionsSelectButtonColor};
    }
`;