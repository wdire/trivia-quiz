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

export const BlueButton = styled.button`
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