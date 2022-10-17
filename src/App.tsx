import './App.scss';
import React from 'react';
import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from 'pages/AboutPage';
import NotFoundPage from 'pages/NotFoundPage';
import Header from 'layouts/Header';
import Footer from 'layouts/Footer';
import FormPage from 'pages/FormPage';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage title="Home Page" />} />
          <Route path="form" element={<FormPage title="Form" />} />
          <Route path="about" element={<AboutPage title="About Us" />} />
          <Route path="*" element={<NotFoundPage title="Page not found" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
