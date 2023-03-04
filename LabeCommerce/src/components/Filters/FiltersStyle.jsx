import styled from "styled-components";

const SearchInput = ({ className, htmlFor, text, type, name, id }) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {text}
      <input type={type} name={name} id={id} />
    </label>
  );
};

export const StyledSearchInput = styled(SearchInput)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2em;
  gap: 0.5em;

  input {
    width: 100%;
    font-size: 2rem;
    outline: none;
    border: 2px solid var(--gunmetal);
    border-radius: 10px;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    [type="number"] {
      -moz-appearance: textfield;
    }
  }
`;
