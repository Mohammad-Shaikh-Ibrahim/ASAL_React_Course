import React from 'react';

import {Todo} from './Todo.js';

// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
     return (
        <div>
            <h1>Todo List</h1>
            {/* Map over the DUMMY_TODOS array to render Todo components */}
            {DUMMY_TODOS.map((todo, index) => (
                <Todo key={index} text={todo} />
            ))}
        </div>
    ); 
}
