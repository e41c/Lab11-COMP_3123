// App.js
import React from 'react';
import './App.css';  // Make sure to import your CSS file
import PersonList from './PersonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      </header>
      <main>
        <PersonList />
      </main>
    </div>
  );
}

export default App;
