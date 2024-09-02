import ReactDOM from 'react-dom';
import React from 'react';

function Toast({ message }) {
  // Render directly into the body using the portal
  return ReactDOM.createPortal(
    <aside className="toast" data-testid="toast">
      <p>{message}</p>
    </aside>,
    document.body // Render directly into the <body>
  );
}

export default Toast;
