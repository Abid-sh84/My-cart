import React from 'react';
import Product from './Product';

const ProductList = ({ products, incrementQuantity, decrementQuantity, removeItem }) => {
  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product, index) => (
          <Product
            key={product.id}
            product={product}
            index={index}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            removeItem={removeItem}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
