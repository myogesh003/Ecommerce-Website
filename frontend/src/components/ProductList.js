// frontend/src/components/ProductList.js

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/slices/productSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {products.map((product) => (
            <div key={product._id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
              <Link to={`/product/${product._id}`}>
                <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
