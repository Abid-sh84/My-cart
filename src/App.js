import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddItem from './components/AddItem';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 50000, quantity: 1, imageUrl: 'https://www.bhphotovideo.com/images/images2500x2500/apple_mnnj2ll_a_apple_watch_series_1_1280589.jpg' },
    { id: 2, name: 'Product 2', price: 100000, quantity: 1, imageUrl: 'https://anavisvolta.com/wp-content/uploads/2020/07/iphone-x-colores.jpg' },
    { id: 3, name: 'Product 3', price: 90000, quantity: 1, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.LVnZWKgVTTYp4uvz_HgJAgAAAA&pid=Api&P=0&h=180' },
  ]);

  const incrementQuantity = (index) => {
    const newProducts = [...products];
    newProducts[index].quantity += 1;
    setProducts(newProducts);
  };

  const decrementQuantity = (index) => {
    const newProducts = [...products];
    if (newProducts[index].quantity > 1) {
      newProducts[index].quantity -= 1;
      setProducts(newProducts);
    }
  };

  const removeItem = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const addItem = (name, price, imageUrl) => {
    const newProducts = [...products, { id: products.length + 1, name, price, quantity: 1, imageUrl }];
    setProducts(newProducts);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <AddItem addItem={addItem} />
        <ProductList
          products={products}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
