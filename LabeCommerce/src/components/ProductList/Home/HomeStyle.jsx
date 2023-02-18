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
`

export const HomeMenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    select {
        width: 8vw;
        margin-left: .5em;
        font-size: 1.5rem;
        outline: none;
    }
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 3em;
    margin-top: 3em;
`