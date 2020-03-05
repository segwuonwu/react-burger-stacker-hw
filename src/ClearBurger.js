import React, { useState } from 'react';

function ClearBurger(props) {
    return (
        <div>
            <button
                onClick={e => {
                    props.clearBurger(e)
                }}
                >clear stack
            </button>
            
        </div>
    )
    
}

export default ClearBurger;