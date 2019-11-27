import React from 'react';

import './App.css';

import ListComponent from './components/ListComponent';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
  
      <header>
        
        <Title level={1}>React Testing</Title>
      </header>


      <article>
        <Title level={2}>Planets</Title>
        <ListComponent url="https://swapi.co/api/planets/" />
      </article>

    </div>
  );
}

export default App;
