import styled from "styled-components";

export const Background = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    min-height: 100vh;
    background-image: url('https://media.istockphoto.com/photos/modern-work-table-with-computer-laptop-and-cityscapes-view-from-picture-id1093508248?k=20&m=1093508248&s=612x612&w=0&h=uy1s7fxKmwtp4qtq-N02nGcE6ulPTMao5wszVEVcSiw=');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Wrapper = styled.div`
    max-width: 70%;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(95, 99, 102, 0.7);
    border-radius: 20px;
    color: white;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

export const Content = styled.section`
    display: flex;
    flex-direction:column;
    justify-content: center;
    margin: 2em;
    align-items:center;
    h1 {
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--pink) ;
    }
    p {
        margin-bottom: 1rem;
    }
    button {
        max-width: 5rem;
        padding: 1em;
        border-radius: 20%;
        align-items: center;
        border: none;
        background: var(--kindablue);
        color: var(white);
        cursor: pointer; 
    }
`;



export const ProfilePic = styled.img`
    max-width: 50%;
    border: 3px solid var(--pink);
    border-radius: 5%;
`;