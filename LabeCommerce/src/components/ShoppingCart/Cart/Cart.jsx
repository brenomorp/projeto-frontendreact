import Items from '../Items/Items';
import { CartItemsWrapper, TotalPrice } from './CartStyle';
import AsideContainer from '../../AsideContainer';

function Cart({ cart, setCart, amount, setAmount }) {
    return (
        <AsideContainer>
            <h2>Carrinho</h2>
            <CartItemsWrapper>
                {cart.map((item) => (
                    <Items
                        price={item.price}
                        name={item.name}
                        quantity={item.quantity}
                        cart={cart}
                        setCart={setCart}
                        id={item.id}
                        key={item.id}
                        amount={amount}
                        setAmount={setAmount}
                    />
                ))}
                {amount > 0 && (
                    <TotalPrice>
                        Valor total: R$ {Math.floor(amount)},00
                    </TotalPrice>
                )}
            </CartItemsWrapper>
        </AsideContainer>
    );
}

export default Cart;
