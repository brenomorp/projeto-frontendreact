import GlobalStyle from './components/GlobalStyle'
import Filters from './components/Filters/Filters'
import Home from './components/ProductList/Home/Home'
import Cart from './components/ShoppingCart/Cart/Cart'
import Wrapper from './components/Wrapper'


function App() {

  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <Filters />
        <Home />
        <Cart />
      </Wrapper>
    </div>
  )
}

export default App
