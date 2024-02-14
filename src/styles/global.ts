import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ $selectedTheme: string }>`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
        
    }
    body  {
        -webkit-font-smoothing: antialised;

        ${({ $selectedTheme, theme }) =>
          $selectedTheme === 'light'
            ? `background-color: ${theme.colors.white};color: ${theme.colors.black};`
            : `background: ${theme.colors.black};color: ${theme.colors.white};`}

        -webkit-transition: background-color 1000ms linear;
        -ms-transition: background-color 1000ms linear;
        transition: background-color 1000ms linear;
    }

    body, input, textarea, button {
        font-family: 'Helvetica Neue', 'Helvetica', 'Roboto', sans-serif;
        
    }

    h1, h2, h3, h4, h5, h6{
        font-weight: 500;
    }



    button {
        cursor: pointer;
        border: none;
       
        background-color: transparent;
        color: inherit;
    }

    ul {
        list-style: none;
    }

    [disabled] {
        opacity: 0.6;
    }
`
