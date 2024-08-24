import React from 'react';
function Summary({ text }) {
  return (
      <React.Fragment>
      <h1>Summary</h1>
      <p>{text}</p>
      </React.Fragment>);
}

function App() {
  return (
     <React.Fragment>
     
      <div id="app" data-testid="app">
        <Summary text="Fragments help you avoid unnecessary HTML elements." />
      </div>
    </React.Fragment>
  );
}

export default App;
