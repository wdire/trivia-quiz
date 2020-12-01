import styled, { keyframes } from "styled-components";

export const colors = {
    blackGray:"#303030",
    blackGrayHover:"#606060",
}

const rotate = keyframes`
        0%{
            transform:rotate(0deg);
        }

        100%{
            transform:rotate(360deg);
        }
`;

export const Loading = styled.div<{height:String}>`
    display:block;
    text-align:center;

    ${ props => props.height ? "height:"+props.height : "" };
    svg{
        ${ props => props.height ? "font-size:"+props.height : "" };
        animation:${rotate} 1s linear infinite;
        transform:rotate(0deg);
    }
    margin:20px 0;
`;