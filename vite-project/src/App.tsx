import './App.css'
import Navbar from './components/Navbar/Navbar'
import ProductDetails from './components/ProductDetails/ProductDetails'
import ProductPicture from './components/ProductPicture/ProductPicture'

function App() {

  return (
    <div className="App">
      <Navbar />
      <section className="main">
        <ProductPicture />
        <ProductDetails />
      </section>
    </div>
  )
}

export default App
