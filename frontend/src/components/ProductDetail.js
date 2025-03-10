// frontend/src/components/ProductDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <img src={product.image} alt={product.name} style={{ maxWidth: '400px' }} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Status: {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</p>
        {product.countInStock > 0 && (
          <div>
            <label htmlFor="qty">Qty:</label>
            <select
              id="qty"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
            <button onClick={addToCartHandler}>Add to Cart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
