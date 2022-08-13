import React from 'react';
import Header from './components/Header/Header';
import PunkCard from './components/Punklist/PunkCard';

function App() {


  return (
    <React.Fragment>
      <Header />
      <div style={{ display: 'flex' }}>
        <PunkCard />
      </div>
    </React.Fragment>
  );
}

export default App;
