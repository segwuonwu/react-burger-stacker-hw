import React, { useState } from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger'

function BurgerPane(props) {
    return (
        <div>
            <BurgerStack burgerStack={props.burgerStack}/>
        </div>
    )
    
    
}

export default BurgerPane;