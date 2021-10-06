import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
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
        h1 {
            font-family: 'Italianno', cursive;
            font-size: 3rem;
            font-weight: 600;
        }
        h2 {
            font-family: 'Eczar', serif;
            font-size: 1.8rem;
            font-weight: 500;
        }

        h3 {
            font-family: 'Rock Salt', cursive;
            font-size: 1.6rem;
        }

        p {
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
        }
    }
`;
