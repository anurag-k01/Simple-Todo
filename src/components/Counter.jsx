import React from "react";
import "./counter.css"
const CounterComp = ({init}) => {
    let [count,updateCount]=React.useState(init)

    const Update = (value) => {
        
        count = count + value;
        updateCount(count);

    }
    const Double = (value) => {
        count = count * value
        updateCount(count);
    }
    const Reset = (value) => {
        count = value;
        updateCount(count);
    }
    return (<>
        <div className="main">
        <h1 className="counter">Counter</h1>
        <h2 class="input">{count}</h2>
        <button onClick={()=>{Update(1)}}>Increment</button>
        <button  onClick={()=>{Update(-1)}}>Decrement</button>
        <button  onClick={()=>{Double(2)}}>Double</button>
        <button  onClick={()=>{Reset(0)}}>Reset</button>
</div>
    
    </>)


}
export default CounterComp;