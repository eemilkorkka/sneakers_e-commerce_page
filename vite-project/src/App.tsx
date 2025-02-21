import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ProductDetails from './components/ProductDetails/ProductDetails'
import ProductPicture from './components/ProductPicture/ProductPicture'
import CartContextProvider from './contexts/CartContex'
import image1 from "./images/image-product-1.jpg";
import image2 from "./images/image-product-2.jpg";
import image3 from "./images/image-product-3.jpg";
import image4 from "./images/image-product-4.jpg";
import ProductPictureView from './components/ProductPictureView/ProductPictureView'

function App() {

  const [productPictureViewOpen, setProductPictureViewOpen] = useState<boolean>(false);

  const productPictures = [
    image1,
    image2,
    image3,
    image4
  ]

  return (
    <div className="App">
      <CartContextProvider>
        <Navbar />
        <section className="main">
          <ProductPicture setProductPictureViewOpen={setProductPictureViewOpen} productPictures={productPictures} />
          <div style={{flex: 1.5}}>
            <ProductDetails />
          </div>
          { productPictureViewOpen && 
            <div className="mask">
              <ProductPictureView productPictures={productPictures} setProductPictureViewOpen={setProductPictureViewOpen} />
            </div>
          }
        </section>
      </CartContextProvider>
    </div>
  )
}

export default App
