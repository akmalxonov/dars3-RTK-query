import React, { useState } from 'react';
import { useGetTodosQuery,useAddProductMutation,useDeleteProductMutation,useUpdateProductMutation } from './redux/api/todo.js';

function App() {
    const { data: products = [], isLoading, refetch } = useGetTodosQuery();
  const [addProduct] = useAddProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  
   const handleAdd = async () => {
    if (name && price) {
      await addProduct({ name, price });
      refetch();
      setName('');
      setPrice('');
    }
  };
  return (
     <div>
      <h1>Products</h1>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
      <button onClick={handleAdd}>Add</button>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => deleteProduct(product.id)}>delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;