import React, { useState } from 'react';

function Ingredients(props) {
    return (
        <div>
            <ul>
                {props.ingredients.map((list, index) => (
                    <li key={`list-${index}`}>{list.name} 
                        <button
                            onClick={e => {
                                props.addIngredient(e, index);
                            }}>Add
                        </button>
                    </li>       
                ))}
            </ul>

        </div>
    )
    
}

export default Ingredients;