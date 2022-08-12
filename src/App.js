import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';

function App() {
  
  const [entries, setEntries] = useState([])

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProp={addNewEntry}/>
      <EntriesChartTracker parentEntries={entries}/>
    </div>
  );
}

export default App;
