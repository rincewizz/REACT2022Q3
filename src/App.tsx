import './App.scss';
import React from 'react';
import Main from 'pages/Main';
import { Route, Routes } from 'react-router-dom';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import Header from 'layouts/Header';
import Footer from 'layouts/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main title="Home Page" />} />
          <Route path="about" element={<About title="About Us" />} />
          <Route path="*" element={<NotFound title="Page not found" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
