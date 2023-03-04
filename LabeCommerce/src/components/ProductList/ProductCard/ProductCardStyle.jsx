import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: var(--gunmetal);
  font-size: 2rem;
  overflow: hidden;
  padding: 0.5em;

  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    justify-content: space-between;
    gap: 0.5em;
    height: 100%;
  }

  button {
    padding: 0.5em;
    width: 100%;
    background-color: var(--orange);
    align-self: flex-end;
    cursor: pointer;
    border-radius: 10px;
    font-size: 1.5rem;
    border: 2px solid var(--gunmetal);

    :hover {
      background-color: rgba(243, 167, 18, 0.9);
      transition: 500ms;
    }
  }
`;
