import React from 'react';

export default function App() {
  // Create a ref to the file input element
  const fileInputRef = React.useRef();

  // Function to handle button click and trigger input click
  const handlePickImage = () => {
    fileInputRef.current.click(); // Triggers the file input click
  };

  return (
    <div>
      {/* Hidden input field for file upload with data-testid */}
      <input
        type="file"
        ref={fileInputRef}  // Attach the ref to input
        style={{ display: 'none' }}  // Hide the input field
        data-testid="file-picker"  // Add the data-testid for testing
      />
      
      {/* Button that triggers the hidden file input */}
      <button onClick={handlePickImage}>Pick Image</button>
    </div>
  );
}
