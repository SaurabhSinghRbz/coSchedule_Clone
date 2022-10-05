import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from '../src/Redux/store'
import { DayContextProvider } from "./context/DayContext";
import ContextWrapper from "./context/ContextWrapper";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
        <ContextWrapper>
          <DayContextProvider>
            <App />
          </DayContextProvider>
        </ContextWrapper>
      </Provider>
    </ChakraProvider>
  </BrowserRouter>

);

