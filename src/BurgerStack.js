import React, { useState } from 'react';
import MyIngredients from './MyIngredients';

function BurgerStack(props) {
    return (
        <div>
            <MyIngredients burgerStack={props.burgerStack} />
            
        </div>
    
    )
}

export default BurgerStack;