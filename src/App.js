import React from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Countdown seconds={30} />

        <ColorBox color="deeppink" />
        <ColorBox color="green" />
      </header>
    </div>
  );
}

export default App;
