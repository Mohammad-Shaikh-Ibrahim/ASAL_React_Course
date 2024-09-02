import React from 'react';  // Import React
import Form from './Form';

// App component
export function App() {
  const formRef = React.useRef();

  function handleRestart() {
    if (formRef.current) {
      formRef.current.clear();
    }
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={formRef} />
    </div>
  );
}
