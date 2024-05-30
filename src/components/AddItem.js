import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(name, parseFloat(price), imageUrl);
    setName('');
    setPrice('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Product Name</label>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Image URL</label>
        <input type="text" className="form-control" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
  );
};

export default AddItem;
