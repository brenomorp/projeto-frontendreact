import styled from 'styled-components'

const SearchInput = ({ className, htmlFor, text, type, name, id }) => {
    return (
        <label className={className} htmlFor={htmlFor}>{text}
            <input type={type} name={name} id={id} />
        </label>
    )
}

export const StyledSearchInput = styled(SearchInput)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2em;
    gap: .5em;

    input {
        width: 100%;
        font-size: 2rem;
        outline: none;

        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        
        [type=number] {
            -moz-appearance: textfield;
        }
    }
`

export const AsideContainer = styled.aside`
    width: 20%;
    height: 100%;
    background-color: #444;
    box-shadow: 2px 2px 8px 5px #222;
    box-shadow: -2px -2px 8px 5px #222;
    padding: 1em;
    border-radius: 10px;

    h2 {
        margin-bottom: 1em;
        text-align: center;
    }
`

