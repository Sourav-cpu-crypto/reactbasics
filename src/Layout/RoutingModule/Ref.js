import React,{useRef} from 'react';
function UseRef(){
    const input=useRef(null);
    const onSubmit=()=>{
        console.log(input.current);
        input.current.focus();
        console.log(input.current.style.color="red");
    }
    return(<>
    
    <input ref={input}  type="text"/>
    <button onClick={onSubmit}>hh</button>
    </>)
}
export default UseRef;