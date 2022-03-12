import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
    const { counter } = useSelector(state => state)
    const dispatch = useDispatch();
    
   
    return ( 
        <div>
        <h1>Counter Page</h1>
        <div className="counter">
        
            <h2 className="count">{counter}</h2>
                
                {/* passing from hook to onclick directement  */}
                <div>
                <button className="mybutton" onClick={() => dispatch({ type: 'INCREMENT' })}> Increment</button>
                <button className="mybutton" onClick ={() => dispatch({ type: 'DECREMENT' })}> Decrement </button>
                </div>
            </div>
        </div>
     );
}

export default Counter;