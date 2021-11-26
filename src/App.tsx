import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TodoLayout from './components/TodoLayout/TodoLayout';

const App: React.FC = () => (
    <>
      <Header />
      <TodoLayout />
      <Footer />
    </>
  );

export default App;
