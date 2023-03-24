import styled from 'styled-components';

export const Card = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    color: var(--gunmetal);
    font-size: 1rem;
    overflow: hidden;
    padding: 1em;

    img {
        width: 100%;
        height: auto;
        aspect-ratio: 1/1;
        object-fit: cover;
        margin-bottom: 0.5rem;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1em;
        height: 100%;
    }

    #product-price {
        color: var(--orange);
        font-size: 2rem;
        font-weight: 700;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
        padding: 0.5em;
        width: 100%;
        background-color: var(--orange);
        text-transform: uppercase;
        cursor: pointer;
        border-radius: 10px;
        font-size: 1rem;
        font-weight: 700;
        border: none;
        color: var(--white);

        img {
            width: 32px;
        }

        :hover {
            background-color: rgb(255, 90, 0);
            transition: 500ms;
        }
    }
`;
