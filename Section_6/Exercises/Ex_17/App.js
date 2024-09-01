import React from 'react'
function App() {
    const [color, setColor] = React.useState("white");

  return (
    <div id="app">
      {/* Apply the inline style to h1 using the color state */}
      <h1 style={{ color }}>CSS is great!</h1>
      <menu>
        <li>
          {/* On button click, set the color to green */}
          <button onClick={() => setColor("green")}>Yes</button>
        </li>
        <li>
          {/* On button click, set the color to red */}
          <button onClick={() => setColor("red")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
