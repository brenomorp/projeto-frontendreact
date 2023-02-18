import ProductCard from "../ProductCard/ProductCard"
import { HomeContainer, HomeMenuContainer, CardsContainer } from "./HomeStyle"

function Home({ productList }) {

    return (
        <HomeContainer>
            <HomeMenuContainer>
                <p>Quantidade de produtos: {productList.length}</p>
                <label htmlFor="sort">
                    Ordenação:
                    <select name="sort" id="sort">
                        <option value="Crescente">
                            Crescente
                        </option>
                        <option value="Decrescente">
                            Decrescente
                        </option>
                    </select>
                </label>
            </HomeMenuContainer>
            <CardsContainer>
            {productList.map(product => (
                <ProductCard src={product.imageUrl} name={product.name.toUpperCase()} price={product.value} />
            ))}
            </CardsContainer>
        </HomeContainer>
    )
}

export default Home