import { Card } from './ProductCardStyle';
import cartIcon from '../../../assets/icons/cart.png';

function ProductCard({ src, name, price, id, cart, setCart }) {
    const addToCart = () => {
        const cartItem = cart.find((item) => item.id == id);

        if (cartItem) {
            cartItem.quantity += 1;
            setCart([...cart]);
        } else {
            setCart([...cart, { name, price, id, quantity: 1 }]);
        }
    };

    return (
        <Card>
            <img src={src} alt="Imagem do produto" />
            <div>
                <span>{name}</span>
                <span id="product-price">
                    R$ {String(price).replace('.', ',')}
                </span>
                <button onClick={addToCart}>
                    <img src={cartIcon} alt="cart icon" />
                    comprar
                </button>
            </div>
        </Card>
    );
}

export default ProductCard;
