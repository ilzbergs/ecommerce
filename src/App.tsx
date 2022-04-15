import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Nav from './components/Nav/Nav';
import Cart from './pages/Cart';
import HomePage from './pages/HomePage'
import User from './pages/User';
import WishList from './pages/WishList';
const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}

  body, html {
    margin: 0 auto;
    padding: 0;
    width: 100%;
    height: 100vh;
    font-family: sans-serif;
  }
`

function App() {
  return (
    <><GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />} />
          <Route path="/wish-list" element={<WishList />} />

        </Routes>
      </BrowserRouter></>
  );
}

export default App;
