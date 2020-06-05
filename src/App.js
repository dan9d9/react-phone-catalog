import React from 'react';
import './styles/App.css';
import PhoneShowAll from './components/PhoneShowAll';

function App() {
  return (
    <div className="App">
      <PhoneShowAll imageFileName='Galaxy_S7.png' name='galaxy' manufacturer='samsung' price={3}/>
    </div>
  );
}

export default App;
