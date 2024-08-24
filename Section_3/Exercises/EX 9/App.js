// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState();
import React from 'react';
export default function App() {
    const[newPrice,setNewPrice]=React.useState(100);
    
    function discountPrice(){
        setNewPrice(75);
    }
    
    return (
        <div>
            <p data-testid="price">${newPrice}</p>
            <button onClick={discountPrice}>Apply Discount</button>
        </div>
    );
}
