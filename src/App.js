import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {
  
  const [entries, setEntries] = useState([{weight: 200, date: '08-11-2022'}, {weight: 205, date: '08-15-2022'}])



  return (
    <div>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
