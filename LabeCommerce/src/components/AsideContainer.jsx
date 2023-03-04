import styled from 'styled-components';

const AsideContainer = styled.aside`
    width: 20%;
    height: 100%;
    background-color: var(--white);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 1em;
    border-radius: 10px;

    h2 {
        font-size: 3rem;
        margin-bottom: 1em;
        text-align: center;
    }

    p,
    label {
        font-size: 2rem;
    }
`;

export default AsideContainer;
