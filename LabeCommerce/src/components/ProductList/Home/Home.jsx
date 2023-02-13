import ProductCard from "../ProductCard/ProductCard"
import { HomeContainer, HomeMenuContainer, CardsContainer } from "./HomeStyle"
import blusaNasa from '../../../assets/blusa-nasa.jpg'

function Home() {

    return (
        
        <HomeContainer>
            <HomeMenuContainer>
                <p>Quantidade de produtos: {0}</p>
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
            <ProductCard src={blusaNasa} name="Blusa da Nasa" price={40}/>
            <ProductCard src={blusaNasa} name="Blusa da Nasa" price={40}/>
            <ProductCard src={blusaNasa} name="Blusa da Nasa" price={40}/>
            <ProductCard src={blusaNasa} name="Blusa da Nasa" price={40}/>
            <ProductCard src={blusaNasa} name="Blusa da Nasa" price={40}/>
            <ProductCard src={blusaNasa} name="Blusa da Nasa" price={40}/>
            <ProductCard src={blusaNasa} name="Blusa da Nasa" price={40}/>
            <ProductCard src={blusaNasa} name="Blusa da Nasa" price={40}/>
            <ProductCard src={blusaNasa} name="Blusa da Nasa" price={40}/>
            <ProductCard src={blusaNasa} name="Blusa da Nasa" price={40}/>
            <ProductCard src={blusaNasa} name="Blusa da Nasa" price={40}/>
            <ProductCard src={blusaNasa} name="Blusa da Nasa" price={40}/>
            </CardsContainer>
        </HomeContainer>
    )
}

export default Home