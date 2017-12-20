import React from 'react';
import { render } from 'react-dom';
import Navbar from './Navbar';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <Navbar />
  
);

render(<App />, document.getElementById('root'));
