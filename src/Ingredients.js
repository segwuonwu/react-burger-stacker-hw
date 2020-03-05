import React, { useState } from 'react';

function Ingredients(props) {
    return (
        <div backgroundColor={props.color}>
            <ul>
                {props.ingredients.map((list, index) => (
                    <li key={`list-${index}`}>{list.name} 
                        <button
                            onClick={e => {
                                props.addIngredient(e, list);
                            }}>Add
                        </button>
                    </li>       
                ))}
            </ul>

        </div>
    )
    
}

export default Ingredients;