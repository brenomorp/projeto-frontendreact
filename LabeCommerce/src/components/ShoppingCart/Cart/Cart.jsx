import Items from '../Items/Items';
import { CartItemsWrapper, TotalPrice } from './CartStyle';
import AsideContainer from '../../AsideContainer';

function Cart() {
    return (
        <AsideContainer>
            <h2>Carrinho</h2>
            <CartItemsWrapper>
                <Items />
                <Items />
                <TotalPrice>Valor total: R$ {0}</TotalPrice>
            </CartItemsWrapper>
        </AsideContainer>
    );
}

export default Cart;
