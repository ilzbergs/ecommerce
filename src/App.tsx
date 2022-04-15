import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage'
const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    font-family: sans-serif;
   display: flex;
   justify-content: center;
  }
`

function App() {
  return (
    <><GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter></>
  );
}

export default App;
