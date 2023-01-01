import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';
import CoffeStore from './store/CoffeStore';
import UserStore from './store/UserStore';


export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    product: new CoffeStore()
  }}>
    <App/>
  </Context.Provider>

);

