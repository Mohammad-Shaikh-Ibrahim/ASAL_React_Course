import React from 'react'
function App() {
    const [color,setColor]= React.useState('')
    
    const handelYesClicked =()=> setColor('highlight-green');
    const handelNoClicked =()=> setColor('highlight-red');
  return (
    <div id="app">
      <h1 className={color} >CSS is great!</h1>
      <menu>
        <li>
          <button onClick={handelYesClicked}>Yes</button>
        </li>
        <li>
          <button onClick={handelNoClicked}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
