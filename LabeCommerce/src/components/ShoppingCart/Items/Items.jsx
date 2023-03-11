import { ItemWrapper } from './ItemsStyle';

function Items({ name, quantity, cart, setCart, id, setAmount }) {
    const removeFromCart = () => {
        const cartItem = cart.find((item) => item.id == id);
        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            setCart([...cart]);
        } else if (cartItem.quantity === 1) {
            setCart(cart.filter((item) => item.id !== id));
        }
    };

    return (
        <ItemWrapper>
            <p>{quantity}</p>
            <p>{name}</p>
            <button onClick={removeFromCart}>Remover</button>
        </ItemWrapper>
    );
}

export default Items;
