import React,{useReducer} from 'react'
const initialstate1=0;
const reducer1=(state1,action1)=>{
    switch(action1){
        case 'increment':return state1 + 1;
        break;
        case 'decrement':return state1 - 1;
        break;
        case 'reset':return 0;
        break;
        default:throw new Error('Unexpected acion');
    }
}

const Reduce = () => {
    const [count1,dispatch1]=useReducer(reducer1,initialstate1)

    return (
        <div>
          <h1>{count1}</h1>  
          <button onClick={() =>dispatch1('increment')}>increment</button>
          <button onClick={() =>dispatch1('decrement')}>decrement</button>
          <button onClick={() =>dispatch1('reset')}>Reset</button>
       
        </div>
    )
}

export default Reduce
