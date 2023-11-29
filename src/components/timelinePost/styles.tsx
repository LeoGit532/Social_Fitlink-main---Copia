import styled from "styled-components";

export const PostContainer = styled.div`
    background-color: #75768B;
    border-radius: .5rem;
    width: 100%;
    min-height: 50rem;
    padding: 1rem;

    img {
        width: 100%;
        border-radius: .75rem;
        object-fit: cover;
        height: 600px;
    }
`;

export const PostHeader = styled.a`
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;

    .user-image {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    .user-name {
        display: grid;

        b {
            font-size: 1.25rem;
        }
    }
`

export const PostFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 1rem;

    .likes {
        display: flex;
        align-items: center;
        gap: .5rem;

        svg {
            color: #FFC947;
        }
    }

    .comments {
        display: flex;
        align-items: center;
        gap: .5rem;

        svg {
            color: #FFC947;
        }
    }
`