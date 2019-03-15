import React from 'react';
import './App.css'

import Head from './Components/Head'
import Summation from './Components/Summation'
import Abilities from './Components/Abilities'

const App = props => (
  <section className="App">
    <Head />
    <Summation />
    <Abilities />
  </section>
);

export default App;
