import React from 'react';
import Header from './Header';
import SodaController from './SodaController';

function App() {
  const divStyle = {
    backgroundColor: "rgba(255, 255, 255, .9)",
    height: "100vh",
    margin: "0"
  }

  return (
    <div style= {divStyle}>
      <Header />
      <SodaController />
    </div>
  )
}

export default App;