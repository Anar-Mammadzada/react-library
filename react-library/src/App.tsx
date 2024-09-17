import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './searchBooksPage/SearchBooksPage';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import { oktaConfig } from './lib/oktaConfig';
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';
import { ReviewListPage } from './layouts/BookCheckoutPage/ReviewListPage/ReviewListPage';
import { ShelfPage } from './layouts/ShelfPage/ShelfPage';
import { CustomSecureRoute } from './layouts/ShelfPage/CustomSecureRoute';

const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {

  const customAuthHandler = () => {
    navigate("/login");
  }

  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    navigate(toRelativeUrl(originalUri || "/", window.location.origin), {replace : true});
  }

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
        <Navbar />
        <div className='flex-grow-1'>
          <Routes>
            <Route path='/' element={<Navigate to="/home" />}></Route>
            <Route path='/home' element={<HomePage />}></Route>
            <Route path='/search' element={<SearchBooksPage />}></Route>
            <Route path='/reviewList/:bookId' element={<ReviewListPage />}></Route>
            <Route path='/checkout/:bookId' element={<BookCheckoutPage />}></Route>
            <Route path='/login' element={< LoginWidget config={oktaConfig} />}></Route>
            <Route path='/login/callback' element={<LoginCallback />}></Route>
            <Route path='/shelf' element={<CustomSecureRoute element={<ShelfPage />} />}></Route>
          </Routes>
        </div>
        <Footer />
      </Security>
    </div>
  );
}

