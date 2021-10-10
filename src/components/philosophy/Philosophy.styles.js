import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--darkblue);
    color: var(--pink);
    h1 {
        margin-top: 1em;
        margin-bottom: 1em;
        text-align: center;
        padding: 1em;
        background: rgb(95, 99, 102, 0.5);
        border-radius: 70%;
    }
`;

export const Content = styled(motion.div)`
    width: 80%;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2em;
    border: 1px solid var(--pink);
    border-radius: 1%;
    background: var(--lightblue);
    color:black;
    min-height: 100%;
    padding: 2em;
    :last-child {
        padding-bottom: 0;
    }

`;

export const Sections = styled.section`
    margin-bottom: 3em;
    h2 {
        max-width: 30%;
        margin: 0 auto;
        margin-bottom: 1.5em;
        padding-bottom: 1em;
        color: var(--darkgrey);
        border-bottom: 2px solid var(--pink);
        text-align:center;
    }
    p {
        margin-bottom: 1em;
        line-height: 1.5;
        text-align: justify;
        margin-left: 10px;
        margin-right: 15px;
    }

`;

