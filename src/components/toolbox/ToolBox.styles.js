import styled from "styled-components";

export const Background = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: url('https://media.istockphoto.com/photos/modern-work-table-with-computer-laptop-and-cityscapes-view-from-picture-id1093508248?k=20&m=1093508248&s=612x612&w=0&h=uy1s7fxKmwtp4qtq-N02nGcE6ulPTMao5wszVEVcSiw=');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 40px 20px;
`;

export const Content = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    background: rgb(237, 181, 191, 0.7);
    padding: 1em;
    border: 1px solid var(--darkgrey);
    border-radius: 5%;
 
`;

export const Tip = styled.section`
    margin-bottom: 2em;

    h3 {
        max-width: 60%;
        margin: 0 auto;
        text-align: center;
        color: var(--darkblue);
        border-bottom: 2px solid var(--darkgrey);
        margin-bottom: 2em;
    }
    
    li {
        margin-left: 20px;
    }

    a {
        font-size:1.4rem;
        text-decoration: none;
        color: black;
    }

`;