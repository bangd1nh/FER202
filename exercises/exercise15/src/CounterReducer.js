import { useReducer } from "react";

const initialState = {
    count: 0
}
function counterReducer(state, action) {
    switch(action.type){
        case 'increment': return {count : state.count + 1}
        case 'decrement': return {count : state.count - 1}
        case 'reset': return {count : state.count = 0}
    }
}
function CounterReducer() {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    return (  
        <>
        <h1>Count: {state.count}</h1>
        <button onClick={()=>{dispatch({type:'increment'})}}>increment</button>
        <button onClick={()=>{dispatch({type:'decrement'})}}>decrement</button>
        <button onClick={()=>{dispatch({type:'reset'})}}>reset</button>
        </>
    );
}

export default CounterReducer;