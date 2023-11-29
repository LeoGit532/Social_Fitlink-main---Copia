import styled from "styled-components";

export const SearchBarHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #75768B;
    
    margin-top: 1rem;
    padding-inline: .5rem;
    height: 3rem;
    border-radius: .5rem;
    margin-bottom: 1rem;

    input {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        color: white;
        font-size: 1.25rem;
        padding-left: .5rem;
    }
`;

export const SearchBarContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: .25rem;
    justify-content: center;
    width: 90%;
    margin-inline: auto;
`;

export const SearchBarBtn = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
`;

export const SearchBarResults = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-top: 1rem;
`;

export const SearchBarResult = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    border: 1px solid #ccc;
    padding: .5rem;
    border-radius: .75rem;

    img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        object-fit: cover;
    }

    p {
        padding-top: 0;
        font-size: 1.25rem;
    }

    .name {
        display: grid;
        grid-gap: .5rem;

        div {
            font-size: 1.25rem;
            font-weight: 700;
        }
    }
`