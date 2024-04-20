// App.js
import React from 'react';
import AddProductForm from '../components/AddProductForm';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-wrapper'>
      <h1 className='text-center'>CRUD Product App with Zustand</h1>
      <AddProductForm />
      <ProductList />
    </div>
    </div>
    
  );
};

export default Home;
