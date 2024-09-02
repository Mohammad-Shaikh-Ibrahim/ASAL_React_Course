import React from 'react';

export default function Workout({ title, description, time, onComplete }) {
  // Use ref to store the timer ID
  const timerRef = React.useRef(null);

  // Function to handle starting the workout timer
  function handleStartWorkout() {
    if (timerRef.current) {
      clearTimeout(timerRef.current); // Clear any existing timer before starting a new one
    }
    console.log(`${title} workout started.`);

    // Set a timer that runs for the specified time (in seconds)
    timerRef.current = setTimeout(() => {
      handleStopWorkout();  // When time expires, stop the workout
    }, time * 1000);  // Convert seconds to milliseconds
  }

  // Function to handle stopping the workout
  function handleStopWorkout() {
    if (timerRef.current) {
      clearTimeout(timerRef.current); // Stop the timer if it exists
      timerRef.current = null;  // Clear the timer reference
      console.log(`${title} workout stopped.`);
    }
    onComplete();  // Trigger the completion callback
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Time: {time} seconds</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}
