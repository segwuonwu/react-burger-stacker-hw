import React, { useState } from 'react';

function MyIngredients(props) {
    return (
        <div>
            <ul>
                {props.burgerStack.map((list, index) => (
                    <li key={`list-${index}`}>{list.name} 
                    </li>      
                ))}
            </ul>
        </div>
    )
    
}

export default MyIngredients;