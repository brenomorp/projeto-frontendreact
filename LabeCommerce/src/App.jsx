import GlobalStyle from './components/GlobalStyle'
import Filters from './components/Filters/Filters'
import Home from './components/ProductList/Home/Home'
import Cart from './components/ShoppingCart/Cart/Cart'
import Wrapper from './components/Wrapper'
import productList from './assets/productList'
import { useState } from 'react'


function App() {

  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState("")
  const [amount, setAmount] = useState("")

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Filters />
        <Home productList={productList}/>
        <Cart />
      </Wrapper>
    </>
  )
}

export default App
