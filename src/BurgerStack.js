import React, { useState } from 'react';
import MyIngredients from './MyIngredients';
import BurgerPane from './BurgerPane';

function BurgerStack(props) {
    return (
        <div>
            <MyIngredients burgerStack={props.burgerStack}/>
        </div>
    
    )
}

export default BurgerStack;