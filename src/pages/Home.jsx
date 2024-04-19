// App.js
import React from 'react';
import AddProductForm from '../components/AddProductForm';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div>
      <h1>CRUD Product App with Zustand</h1>
      <AddProductForm />
      <ProductList />
    </div>
  );
};

export default Home;
