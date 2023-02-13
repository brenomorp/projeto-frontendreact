import styled from "styled-components";

export const Card = styled.article`
    display: flex;
    flex-direction: column;
    background-color: #d5d5d3;
    border-radius: 10px;
    box-shadow: 2px 2px 8px 5px #222;
    box-shadow: -2px -2px 8px 5px #222;
    color: #252525;
    font-size: 2rem;

    
    img {
        width: 300px;
        border-radius: 10px 10px 0 0;
    }
    
    div {
        display: flex;
        flex-direction: column;
        gap: .3em;
        padding: .5em;
    }

    button {
        width: 100%;
        height: 2em;
        background-color: #fdd947;
        align-self: center;
        cursor: pointer;
        border-radius: 10px;
        font-size: .8em;
        margin-top: 1em;
    }
`