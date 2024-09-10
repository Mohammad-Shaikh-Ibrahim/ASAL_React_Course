import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import ConfiguerCounter from './components/Counter/ConfigureCounter.jsx';
import { log } from './log.js';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  function handelSetCount(newCount){
    setChosenCount(newCount);
    setChosenCount((prevChosenCount)=> prevChosenCount+1);
  }
  return (
    <> 
      <Header />
      <main>
        <ConfiguerCounter onSet={handelSetCount}/>
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
