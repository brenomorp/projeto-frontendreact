import Items from "../Items/Items"
import { AsideContainer } from "../../Filters/FiltersStyle"
import { CartItemsWrapper, TotalPrice } from "./CartStyle"

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
    )
}

export default Cart