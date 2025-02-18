import './App.css'
import Navbar from './components/Navbar/Navbar'
import ProductDetails from './components/ProductDetails/ProductDetails'
import ProductPicture from './components/ProductPicture/ProductPicture'
import CartContextProvider from './contexts/CartContex'
function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <Navbar />
        <section className="main">
          <ProductPicture />
          <div style={{flex: 1.5}}>
            <ProductDetails />
          </div>
        </section>
      </CartContextProvider>
    </div>
  )
}

export default App
