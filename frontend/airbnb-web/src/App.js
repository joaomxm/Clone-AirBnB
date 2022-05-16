import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes';
import { GlobalStyle } from  "./styles/global";


export default function App() {
  return (
    <Router>
        <GlobalStyle/>
        <MainRoutes />
      
    </Router>

  )
}
