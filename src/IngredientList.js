import React, { useState } from 'react';
import Ingredients from './Ingredients'

function IngredientList(props) {
    return (
        <div>
            <Ingredients ingredients={props.ingredient} addIngredient={props.addIngredient}/>
        </div>
    )
    
}

export default IngredientList;