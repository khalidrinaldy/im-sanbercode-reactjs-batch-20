import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import BooksProvider from './components/Context/BooksProvider';
import AuthProvider from './components/Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <BooksProvider>
        <AuthProvider>
          <Navbar />
        </AuthProvider>
      </BooksProvider>
    </div>
  );
}

export default App;
