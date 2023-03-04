import { StyledSearchInput } from "./FiltersStyle";
import AsideContainer from "../AsideContainer";

function Filters() {
  return (
    <AsideContainer>
      <h2>Filtros</h2>
      <StyledSearchInput
        htmlFor="filterMin"
        text="Valor mínimo:"
        type="number"
        name="filterMin"
        id="filterMin"
      />
      <StyledSearchInput
        htmlFor="filterMax"
        text="Valor máximo:"
        type="number"
        name="filterMax"
        id="filterMax"
      />
      <StyledSearchInput
        htmlFor="filterName"
        text="Busca por nome:"
        type="text"
        name="filterName"
        id="filterName"
      />
    </AsideContainer>
  );
}

export default Filters;
