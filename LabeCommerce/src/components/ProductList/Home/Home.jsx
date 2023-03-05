import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { HomeContainer, HomeMenuContainer, CardsContainer } from './HomeStyle';

function Home({ productList, cart, setCart, setAmount }) {
    const [ordination, setOrdination] = useState('Crescente');

    return (
        <HomeContainer>
            <HomeMenuContainer>
                <p>Quantidade de produtos: {productList.length}</p>
                <label htmlFor="sort">
                    Ordenação:
                    <select
                        name="sort"
                        id="sort"
                        onChange={(e) => setOrdination(e.target.value)}
                        value={ordination}
                    >
                        <option value="Crescente">Crescente</option>
                        <option value="Decrescente">Decrescente</option>
                    </select>
                </label>
            </HomeMenuContainer>
            <CardsContainer>
                {productList.map((product) => (
                    <ProductCard
                        src={product.imageUrl}
                        name={product.name.toUpperCase()}
                        price={product.price}
                        key={product.id}
                        cart={cart}
                        setCart={setCart}
                        id={product.id}
                        setAmount={setAmount}
                    />
                ))}
            </CardsContainer>
        </HomeContainer>
    );
}

export default Home;
