import './App.scss';
import React, { useState } from 'react';
import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from 'pages/AboutPage';
import NotFoundPage from 'pages/NotFoundPage';
import Header from 'layouts/Header';
import Footer from 'layouts/Footer';
import FormPage from 'pages/FormPage';
import { Modal } from 'components/Modal/Modal';
import { AppProvider } from 'appState/appContext';
import Character from 'pages/Character';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>();

  function closeModal() {
    setIsModalOpen(false);
  }
  function openModal(content: React.ReactNode) {
    setIsModalOpen(true);
    setModalContent(content);
  }

  return (
    <AppProvider>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage title="Home Page" openModal={openModal} />} />
          <Route path="form" element={<FormPage title="Form" />} />
          <Route path="about" element={<AboutPage title="About Us" />} />
          <Route path="*" element={<NotFoundPage title="Page not found" />} />
        </Routes>
      </main>
      <Footer />
      {isModalOpen && <Modal close={closeModal}>{modalContent}</Modal>}
    </AppProvider>
  );
}

export default App;
