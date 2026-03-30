import React, { useState, useCallback } from 'react';
import Portfolio from './Portfolio';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const handleLoaderDone = useCallback(() => setLoaded(true), []);

  return (
    <div className="App">
      <Loader onDone={handleLoaderDone} />
      <div className={`app-content ${loaded ? 'app-content--visible' : ''}`}>
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
