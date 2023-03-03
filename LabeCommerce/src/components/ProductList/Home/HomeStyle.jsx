import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 1em 3em;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const HomeMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  select {
    width: 8vw;
    margin-left: 0.5em;
    font-size: 1rem;
    outline: none;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2em;
  gap: 2em;
`;
