import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --white: #FBFBFF;
        --orange: #F3A712;
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
