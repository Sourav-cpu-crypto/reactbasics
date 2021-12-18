import React,{useState}  from 'react'
import  axios  from 'axios';
import form from './form.css'
import { Login1 } from '../actions/AuthAction';
import {useDispatch,useSelector} from 'react-redux';
import {Navbar,Nav,Container,Form,Button}  from 'react-bootstrap' 

import {Link,UseHistory} from 'react-router-dom';

export default function Login() {
   const dispatchMethod=useDispatch()

  const [inputState,setInputState]=useState(
    {isError:{email:'',password:''}}
  )

    const handleChange=(event)=>{
       
event.persist();
console.log("handle change",event.target.value)
let {name,value}=event.target;
let issErr={...inputState.isError};

switch(name){
  
  case "email":
  issErr.email=value.length<4?"atleast 4 characters required":"";
  break;
  
  case "password":
  issErr.password=value.length<4?"atleast 4 characters required":"";
  break;
}  
setInputState({...inputState,[name]:value})



    }
    const submit=(event)=>{
event.preventDefault();
console.log('inputState',inputState);
const user=inputState;
dispatchMethod(Login1(user));
    }

    return (
       <Container className="con">
        <div class="wrapper">
         <div class="title-text">
            <div class="title login">
               Login Form
            </div>
          
         </div>
         <div class="form-container1">
            <div class="slide-controls">
               <input type="radio" name="slide" id="login" checked/>
               <input type="radio" name="slide" id="signup"/>
               <label for="login" class="slide login">
               <Link className="link" to="/Login">Login</Link>
               </label>
          
            </div>
            <div class="form-inner">
               <form action="#" class="login" onSubmit={submit}>
                  <div class="field">
                  
                     <input type="email" name="email" onChange={handleChange} placeholder="Email Address" />
                     {inputState.isError.email.length > 0  && (
                       <span>{inputState.isError.email}</span>
                     )}
                  </div>

                  <div class="field">
                     <input type="password"  name="password" onChange={handleChange} placeholder="Password" />
                  
                     {inputState.isError.password.length > 0  && (
                       <span>{inputState.isError.password}</span>
                     )}
                  </div>
             
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="submit" value="Login"/>
                  </div>
                  <div class="signup-link">
                  <Link to="/Register">
                     Not a member? <a href="">Signup now</a></Link>
                  </div>
               </form>
            
            </div>
         </div>
      </div>
      </Container>
    )
}
