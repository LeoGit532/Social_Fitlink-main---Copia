import styled from "styled-components";

export const BottomBarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #34374C;
    z=index: 100;
    border-radius: 1rem 1rem 0 0;
`;

export const BottomBarBtn = styled.button`
    border: none;
    background-color: #75768B;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 100vmax;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;