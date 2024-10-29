import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import {BrowserRouter} from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51QD3AsKf2FDKjKbs71dNPHE1XGjj26QMSd7Sq3CsIgOw6WI1xBSt2rV1rsmEJcerrk3Mdf3L5bykrpfDpBtS3SdN00i4BFbRG2');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Elements stripe={stripePromise}>
    <App />
  </Elements>
  </BrowserRouter>
);


