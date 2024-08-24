import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [activeStyle,setActiveStyle]=React.useState(false);
    
    function isActive(){
        setActiveStyle(prevState => !prevState);
    }
    return (
        <div>
            <p className={activeStyle ? 'active' : ''}>Style me!</p>
            <button onClick={isActive}>Toggle style</button>
        </div>
    );
}
