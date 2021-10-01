import React, { HTMLProps } from "react";
import styled, { css } from "styled-components";
import {  buttonThemeMap, ThemeColor } from "../../styles/pallete";

type ButtonSizeType = "s" | "m" | "l";

interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>,"to"> {
    ButtonSize: ButtonSizeType;
    Option: ThemeColor;
}

const ButtonBlock = styled.div<ButtonProps>`
    display: inline-block;
    padding: 0.5rem, 1rem;
    text-align: center;
    background-color: ${(props) => buttonThemeMap[props.Option as ThemeColor].backgroundColor};
    color: ${(props) => buttonThemeMap[props.Option as ThemeColor].color};
    border: 2px solid ${(props) => buttonThemeMap[props.Option as ThemeColor].border};
    border-radius: 17px;
    cursor: pointer;
    ${(props) => props.ButtonSize === "s" && css`
        padding: 0.35rem 0.6rem;
        font-size: 1rem;
    `}
    ${(props) => props.ButtonSize === "m" && css`
        padding: 0.45rem 0.7rem;
        font-size: 1rem;
    `}
    ${(props) => props.ButtonSize === "l" && css`
        padding: 0.65rem 1rem;
        font-size: 1rem;
    `}

    & + & {
        margin-left: 0.5rem;
    }
`

const Button: React.FC<ButtonProps> = ({ButtonSize = "m", Option, children, ...rest}) => {
    const htmlProps = rest as any;
    return (
        <ButtonBlock Option={Option} ButtonSize={ButtonSize} {...htmlProps}>
            {children}
        </ButtonBlock>
    )
}

export default Button;