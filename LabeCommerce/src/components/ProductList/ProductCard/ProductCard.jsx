import { Card } from './ProductCardStyle';

function ProductCard({ src, name, price, id, cart, setCart, setAmount }) {
    const addToCart = () => {
        const cartItem = cart.find((item) => item.id == id);

        if (cartItem) {
            cartItem.quantity += 1;
            setCart([...cart]);
        } else {
            setCart([...cart, { name, price, id, quantity: 1 }]);
        }

        let total = 0;
        for (let i in cart) {
            total += cart[i].price * cart[i].quantity;
        }
        setAmount(total);
    };

    return (
        <Card>
            <img src={src} alt="Imagem do produto" />
            <div>
                <p>{name}</p>
                <p>Preço: R$ {price}</p>
                <button onClick={addToCart}>Adicionar ao carrinho</button>
            </div>
        </Card>
    );
}

export default ProductCard;
