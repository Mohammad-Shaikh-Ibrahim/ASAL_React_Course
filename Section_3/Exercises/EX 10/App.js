import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {
    const [showWarning, setShowWarning] = React.useState(false);

    // Function to show the warning box
    function showWarningBox() {
        setShowWarning(true);  // Set state to true, showing the warning box
    }

    // Function to hide the warning box
    function hideWarningBox() {
        setShowWarning(false);  // Set state to false, hiding the warning box
    }

    // Conditionally render the warning box
    let warningBox = (
        <div data-testid="alert" id="alert">
            <h2>Are you sure?</h2>
            <p>These changes can't be reverted!</p>
            <button onClick={hideWarningBox}>Proceed</button>  {/* Hide when "Proceed" is clicked */}
        </div>
    );

    return (
        <div>
            {showWarning ? warningBox : null} {/* Render warning box based on state */}
            <button onClick={showWarningBox}>Delete</button> {/* Show warning box when "Delete" is clicked */}
        </div>
    );
}