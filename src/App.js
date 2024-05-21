import React from 'react';
import './App.css';
import NewsComponent from './NewsComponent';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>News App</h1>
      </header>
      <main>
        <NewsComponent />
      </main>
    </div>
  );
}

export default App;
