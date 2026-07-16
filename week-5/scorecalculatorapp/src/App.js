import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        name="Shanthosini"
        school="Sona College of Technology"
        total={450}
        goal={500}
      />
    </div>
  );
}

export default App;