import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    min-height: 80px;
    background: var(--lightblue);
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
        min-height: 80px;
        padding: 0 2em;
        list-style :none;
        cursor: pointer;
        :hover {
            color: var(--white);
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
`;
