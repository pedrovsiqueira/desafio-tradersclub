import React from 'react';
import GlobalStyle from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/index';

const App = () => (
  <React.StrictMode>
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  </React.StrictMode>
);

export default App;
