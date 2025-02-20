import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        --bg:#fff;
        --bg-secondary: #f9f9fb;
        --border-primary: #cfcfd8;
        --color-headings: #1b1b1b;
        --color-text: #4e4e4e;
    }

    body {
        font: 16px "Helvetica Neue", Arial, sans-serif;
        color: var(--color-headings);
        justify-content: center;
    }
`



