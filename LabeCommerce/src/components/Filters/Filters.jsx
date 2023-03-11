import { StyledSearchInput } from './FiltersStyle';
import AsideContainer from '../AsideContainer';

function Filters({
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    searchFilter,
    setSearchFilter,
}) {
    return (
        <AsideContainer>
            <h2>Filtros</h2>
            <StyledSearchInput
                text="Valor mínimo:"
                type="number"
                name="filterMin"
                id="filterMin"
                value={minFilter != 0 && minFilter}
                onChange={(e) => setMinFilter(e.target.value)}
            />
            <StyledSearchInput
                text="Valor máximo:"
                type="number"
                name="filterMax"
                id="filterMax"
                value={maxFilter != 0 && maxFilter}
                onChange={(e) => setMaxFilter(e.target.value)}
            />
            <StyledSearchInput
                text="Busca por nome:"
                type="text"
                name="filterName"
                id="filterName"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
            />
        </AsideContainer>
    );
}

export default Filters;
