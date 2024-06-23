import React, { memo } from 'react';

function Child({ increment }) {
    console.log("child component");

    return (
        // <div>child</div>
        
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default memo(Child);
