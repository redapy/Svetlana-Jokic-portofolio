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
        overflow-x: hidden;
        width: 100%;
        min-height: 100vh;
        h1 {
            font-family: 'Italianno', cursive;
            font-size: clamp(1.5rem, 3vw + .5rem, 3rem);
            font-weight: 600;
        }
        h2 {
            font-family: 'Eczar', serif;
            font-size: clamp(1.2rem, 2vw + .5rem, 1.8rem);
            font-weight: 500;
        }

        h3 {
            font-family: 'Rock Salt', cursive;
            font-size: clamp(1rem, 1vw + .5rem, 1.6rem);
        }

        p {
            font-family: 'Montserrat', sans-serif;
            font-size: clamp(0.8rem, 0.5vw + .5rem, 1rem);
        }
    }
`;
