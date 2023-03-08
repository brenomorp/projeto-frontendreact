import GlobalStyle from './components/GlobalStyle';
import Filters from './components/Filters/Filters';
import Home from './components/ProductList/Home/Home';
import Cart from './components/ShoppingCart/Cart/Cart';
import Wrapper from './components/Wrapper';
import productList from './assets/productList';
import { useEffect, useState } from 'react';

function App() {
    const [minFilter, setMinFilter] = useState('');
    const [maxFilter, setMaxFilter] = useState('');
    const [searchFilter, setSearchFilter] = useState('');
    const [cart, setCart] = useState([]);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        let total = 0;
        for (let i in cart) {
            total += cart[i].price * cart[i].quantity;
        }
        setAmount(total);
    }, [cart]);

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Filters
                    minFilter={minFilter}
                    setMinFilter={setMinFilter}
                    maxFilter={maxFilter}
                    setMaxFilter={setMaxFilter}
                    searchFilter={searchFilter}
                    setSearchFilter={setSearchFilter}
                />
                <Home
                    productList={productList}
                    cart={cart}
                    setCart={setCart}
                    amount={amount}
                    setAmount={setAmount}
                />
                <Cart
                    cart={cart}
                    setCart={setCart}
                    amount={amount}
                    setAmount={setAmount}
                />
            </Wrapper>
        </>
    );
}

export default App;
