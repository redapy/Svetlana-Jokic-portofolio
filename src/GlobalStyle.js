import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: white;
        --darkblue: #4D6D9A;
        --lightblue: #99CED3;
        --kindablue: #86B3D1;
        --darkgrey: #5F6366;
        --pink: #EDB5BF; 
      
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        width: 100%;
        min-height: 100vh;
    }
`;
