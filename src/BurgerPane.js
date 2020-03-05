import React from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger'

function BurgerPane(props) {
    return (
        <div>
            <BurgerStack burgerStack={props.burgerStack} />
            <ClearBurger clearBurger={props.clearBurger}/>
        </div>
    )
    
    
}

export default BurgerPane;