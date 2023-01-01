import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';
import CoffeStore from './store/CoffeStore'


export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    product: new CoffeStore()
  }}>
    <App/>
  </Context.Provider>

);

