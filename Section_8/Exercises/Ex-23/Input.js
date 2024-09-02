import React from 'react';

const Input = React.forwardRef((props, ref) => {
  const { label, ...inputProps } = props; // Destructure props
  return (
    <p className="control">
      <label>{label}</label>
      <input ref={ref} {...inputProps} /> {/* Spread other props like type */}
    </p>
  );
});

export default Input;
