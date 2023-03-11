import styled from 'styled-components';

export const CartItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    height: 70%;
    padding: 1em;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const TotalPrice = styled.p`
    text-align: center;
    margin-bottom: 1em;
`;

export const CheckoutButton = styled.button`
    width: 100%;
    height: 3rem;
    background-color: var(--orange);
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    color: var(--white);
    margin-top: 2em;

    :hover {
        background-color: rgb(255, 90, 0);
        transition: 500ms;
    }
`;
