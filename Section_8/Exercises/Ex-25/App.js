import React from 'react';
import Toast from './Toast';

function App() {
  const [showToast, setShowToast] = React.useState(false);

  function handleEnrol() {
    setShowToast(true); // Show the toast

    // Hide the toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  return (
    <div id="app">
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>

      {/* Conditionally render the Toast component */}
      {showToast && <Toast message="Enrolled Successfully!" />}
    </div>
  );
}

export default App;
