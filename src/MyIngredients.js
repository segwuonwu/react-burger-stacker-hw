import React from 'react';

function MyIngredients(props) {
    return (
        <div>
            <ul>
                {props.burgerStack.map((list, index) => (
                    <li key={`list-${index}`}>{list.name} 
                    </li>      
                ))}
            </ul>
            <div>
                -----------------------------
            </div>
            <div>
                Burger Stacking Area
            </div>
            
        </div>
    )
    
}

export default MyIngredients;