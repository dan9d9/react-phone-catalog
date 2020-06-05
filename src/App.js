import React from 'react';
import './styles/App.css';
import PhoneList from './components/PhoneList';

import phones from './phones.json';

function App() {
  return (
    <div className="App">
      <PhoneList phones={phones}/>
    </div>
  );
}

export default App;
