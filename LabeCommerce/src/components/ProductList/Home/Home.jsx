import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import {
    HomeContainer,
    HomeMenuContainer,
    CardsContainer,
    ProductNotFound,
} from './HomeStyle';

function Home({
    productList,
    cart,
    setCart,
    setAmount,
    minFilter,
    maxFilter,
    searchFilter,
}) {
    const [ordination, setOrdination] = useState('Crescente');

    const filteredProductList = [...productList]
        .sort((a, b) => {
            switch (ordination) {
                case 'Crescente':
                    return a.id > b.id ? 1 : -1;
                case 'Decrescente':
                    return a.id > b.id ? -1 : 1;
                default:
                    return 0;
            }
        })
        .filter((item) => {
            if (
                item.price >= minFilter &&
                (item.price <= maxFilter || maxFilter == 0)
            ) {
                return item;
            }
        })
        .filter((item) => {
            if (item.name.toLowerCase().includes(searchFilter.toLowerCase())) {
                return item;
            }
        });

    return (
        <HomeContainer>
            <HomeMenuContainer>
                <p>Quantidade de produtos: {filteredProductList.length}</p>
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
            {filteredProductList.length > 0 ? (
                <CardsContainer>
                    {filteredProductList.map((product) => (
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
            ) : (
                <ProductNotFound>
                    <p>Nenhum produto encontrado</p>
                </ProductNotFound>
            )}
        </HomeContainer>
    );
}

export default Home;
