import React, { useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import CartContext from './CartContext';
import LoginForm from './components/Login/LoginForm';
import Nav from './components/Nav/Nav';
import SignUpForm from './components/SignUp/SignUpForm';

import Cart from './pages/Cart';
import HomePage from './pages/HomePage'
import Product from './pages/Product';
import Products from './pages/Products';
import User from './pages/User';
import WishList from './pages/WishList';
import UserContext from './UserContext';
import WishListContext from './WishListContext';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}

  body, html {
    margin: 0 auto;
    padding: 0 px;
    width: 100%;
    height: 100vh;
    font-family: sans-serif;
  }
`

function App() {
  const [user, setUser] = useState()
  const [cartValue, setCartValue] = useState([]);
  const [wishListValue, setWishListValue] = useState([]);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <><GlobalStyle />
      <UserContext.Provider value={providerValue}>
        <CartContext.Provider value={{ cartValue, setCartValue }}>
          <WishListContext.Provider value={{ wishListValue, setWishListValue }}>
            <BrowserRouter>
              <Nav />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/user" element={<User />} />
                <Route path="/wish-list" element={<WishList />} />
                <Route path='category/:category' element={<Products />} />
                <Route path='/login' element={<LoginForm />} />
                <Route path='/sign-up' element={<SignUpForm />} />
                <Route path='/product/:id' element={<Product />} />
              </Routes>
            </BrowserRouter>
          </WishListContext.Provider>
        </CartContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
