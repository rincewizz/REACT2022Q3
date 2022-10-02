import './App.scss';
import React from 'react';
import Main from 'pages/Main';
import Header from 'layouts/Header';
import Footer from 'layouts/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Main>
      </main>
      <Footer />
    </>
  );
}

export default App;
