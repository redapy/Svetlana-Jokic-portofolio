import styled, { css } from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    min-height: 60px;
    background: var(--lightblue);
    font-family: 'Chewy', cursive;
    font-size: 1.4rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 720px) {
        transition: 0.8s all ease; 
        display: none;
    }
`;


export const MobileIcon=styled.button`
    display: none;

    @media screen and (max-width: 720px) {
        display: block;
        position: relative;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 100;
        background: var(--lightblue);
        font-size: 1.8rem;
        padding: 0.4rem;
        border: none;
        cursor: pointer;

    }
`;

export const List = styled.ul`
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    li {
        display: flex;
        align-items: center;
        min-height: 60px;
        padding: 0 2em;
        list-style :none;
        cursor: pointer;
        :hover {
            color: white;
            background: var(--pink);
        }
    }
    a {
        text-decoration: none; 
        color: black;
        :hover {
            color: var(--white);
        }
    } 
    
    @media screen and (max-width: 720px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: var(--lightblue);
        li {
            display: flex;
            width: 100vw;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    }   
`;


