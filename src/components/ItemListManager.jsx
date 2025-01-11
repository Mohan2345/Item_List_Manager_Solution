'use client'

import React, { useState } from 'react';

const ItemListManager = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Item List Manager</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newItem}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new item"
          className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddItem}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Item
        </button>
      </div>
      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index} className="mb-1">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListManager;

