import React, { useState } from 'react';
import Navbar from './component/navbar';
import DiseaseList from './component/DiseasesList';
import ContactForm from './component/contactform';

function App() {
  const [selected, setSelected] = useState('');

  const handleSelect = (button) => {
    setSelected(button);
  };

  return (
    <div>
      <Navbar onSelect={handleSelect} />
      {selected === 'All Diseases' && <DiseaseList />}
      {/* You can add other components based on selected state */}
      
    </div>
  );
}

export default App;
