import { useState, useEffect } from 'react';
import { getProducts } from '../firebase/firebase';

export default function ProductsComponents() {
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setMyProducts(products));
  }, []);
  return (
    <>
      {myProducts.map((product) => (
        <li key={product.id}>
          {product.title} - {product.category} - ${product.price} -{' '}
          {product.description}
        </li>
      ))}
    </>
  );
}