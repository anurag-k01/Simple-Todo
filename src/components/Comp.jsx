import React from 'react';
export default function Comp() {
    let [counter,updateCounter] = React.useState(5)
    const increment = (value) => {
        if (counter == 0) {
            counter = 0
            updateCounter(counter)
        }
        else {
            counter = counter + value;
            updateCounter(counter);
        }
        }
    return (
        <>
            <h1>Counter</h1>
            <h2>{counter}</h2>
                <button onClick={()=> increment(1)}>Add</button>
                <button onClick={()=> increment(-1)}>Reduce</button>
        </>
)

}