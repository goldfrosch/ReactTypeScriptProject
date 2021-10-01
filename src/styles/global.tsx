import { createGlobalStyle } from "styled-components";
import { Pallete } from "./pallete";

const GlobalStyle = createGlobalStyle`
    body {
        min-width: 100%;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        background-color: ${Pallete.lightGray};
        color: #333;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    * {
        box-sizing: inherit;
        outline: none;
        list-style: none;
        text-decoration: none;
        font-family: inherit;
    }
`

export default GlobalStyle;