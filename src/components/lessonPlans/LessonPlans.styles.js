import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 100%;
    min-height: 100vh;
    background: var(--darkblue);
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 750px) {
        flex-direction: column;
        min-width: 750px;
    }
`;

export const Content = styled.article`
    max-width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--lightblue);
    padding: 2em;
    border: 1px solid var(--pink);
    border-radius: 5%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    h3 {
        color: var(--darkgrey);
        border-bottom: 2px solid var(--pink);
        padding-bottom: 0.5em;
        width: 100%;
        text-align: center;
    }
`;

export const Flex = styled.div`
    max-width: 100%;
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    max-width: 30%;
    object-fit: contain;
    opacity: 0.9;
    border: 2px solid var(--pink);
    border-radius: 50%;
`;

export const List = styled.ol`
    margin: 2em;
    li {
        margin-bottom: 1em;
        :last-child {
            margin-bottom: 0;
        }
    }
    a {
        text-decoration: none;
        color: black;
    }
`;