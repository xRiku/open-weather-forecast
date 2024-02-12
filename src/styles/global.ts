import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 1080px) {
            font-size: 87.5%;
        }
        
    }
    body  {
        @media (prefers-color-scheme: light) {
            background-color: ${(props) => props.theme.colors.white};
            color: ${(props) => props.theme.colors.black};
            -webkit-font-smoothing: antialised;
        }
        background: ${(props) => props.theme.colors.black};
        -webkit-font-smoothing: antialised;
        color: ${(props) => props.theme.colors.white};
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
