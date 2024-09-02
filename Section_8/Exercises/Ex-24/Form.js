import React from 'react';  // Import React

// Form component
const Form = React.forwardRef((props, ref) => {
  // Use the useImperativeHandle hook to expose methods to the parent component
  React.useImperativeHandle(ref, () => ({
    clear() {
      document.querySelector('form').reset();  // Call the form's reset() method
    }
  }));

  return (
    <form>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>
      <p>
        <label>Email</label>
        <input type="email" />
      </p>
      <p id="actions">
        <button type="button">Save</button>
      </p>
    </form>
  );
});

export default Form;
