import styled from 'styled-components';

export const ItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 3fr 1fr;
    gap: 1em;
    align-items: center;
    text-overflow: ellipsis;

    p {
        font-size: 1rem;
    }

    button {
        background-color: #b33a3a;
        border: none;
        font-size: 1.3rem;
        padding: 0.5em;
        border-radius: 10px;
        cursor: pointer;
        border: 2px solid var(--gunmetal);

        :hover {
            background-color: #9d2626;
            transition: 500ms;
        }
    }
`;
