// Updater functions: passed to setter functions, allow updates based on previous value of the stateful variable instead of the current value

import React, {useState} from "react"

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        // setCount(count+1);
        
        // setCount(count+1);
        // setCount(count+1);
        // wouldn't work to increment the value by 2 because it is based on the current state

        setCount(c => c+1);
        // this will work because it is based on the previous state
    };

    const decrement = () => {
        setCount(count-1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );

}

export default Counter