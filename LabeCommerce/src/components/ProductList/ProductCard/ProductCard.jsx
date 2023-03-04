import { Card } from "./ProductCardStyle";

function ProductCard({ src, name, price }) {
  return (
    <Card>
      <img src={src} alt="Imagem do produto" />
      <div>
        <p>{name}</p>
        <p>Preço: R$ {price}</p>
        <button>Adicionar ao carrinho</button>
      </div>
    </Card>
  );
}

export default ProductCard;
