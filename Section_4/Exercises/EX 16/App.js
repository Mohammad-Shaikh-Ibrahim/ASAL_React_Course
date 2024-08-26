import React, { useState } from 'react';
import Review from './Review';

// don't change the Component name "App"
function App() {
  // State to manage the textarea and input values
  const [feedback, setFeedback] = React.useState();
  const [student, setStudent] = React.useState();

  // Handle changes for textarea
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  // Handle changes for input
  const handleStudentChange = (event) => {
    setStudent(event.target.value);
  };

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedback} onChange={handleFeedbackChange} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={student} onChange={handleStudentChange} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        {/* Pass feedback and student name to the Review component */}
        <Review feedback={feedback} student={student} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

// function App() {
//     return (
//       <>
//         <section id="feedback">
//           <h2>Please share some feedback</h2>
//           <p>
//             <label>Your Feedback</label>
//             <textarea />
//           </p>
//           <p>
//             <label>Your Name</label>
//             <input type="text" />
//           </p>
//         </section>
//         <section id="draft">
//           <h2>Your feedback</h2>
  
//           <Review />
  
//           <p>
//             <button>Save</button>
//           </p>
//         </section>
//       </>
//     );
//   }
  

export default App;
