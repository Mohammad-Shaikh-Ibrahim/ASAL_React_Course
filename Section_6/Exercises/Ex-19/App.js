import React from 'react';

// don't change the Component name "App"
function App() {
  // State to track the current color (initially white)
  const [color, setColor] = React.useState('white');

  // Function to toggle the color between red and white
  const toggleColor = () => {
    setColor(prevColor => prevColor === 'white' ? 'red' : 'white');
  };

  return (
    <div id="app">
      {/* Apply the inline style dynamically based on the current state */}
      <p style={{ color: color }}>Style me</p>
      
      {/* Button to toggle the color */}
      <button onClick={toggleColor}>Toggle Style</button>
    </div>
  );
}

export default App;
