import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --white: #FBFBFF;
        --orange: rgb(255, 101, 0);
        --gunmetal: #143642;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;
