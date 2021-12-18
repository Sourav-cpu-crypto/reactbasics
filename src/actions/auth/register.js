import React,{useState}  from 'react'

import form from './form.css'
import {Navbar,Nav,Container,Form,Button}  from 'react-bootstrap' 


import {Link,UseHistory} from 'react-router-dom';
import  axios  from 'axios';
import { SignUp } from '../actions/AuthAction';
export default function Register() {

 const pass1=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
 const mob1=RegExp('^[6-9][0-9]{9}$');

 

    const [inputState,setInputState]=useState(
      {isError:{username:'',email:'',password:''}}
    )
    const handleChange=(event)=>{
event.persist();

let {name,value}=event.target;
let issErr=inputState.isError;

switch(name){
case "username":
issErr.username=value.length<4 ?"atleast 4 characters required":"";
break;

case "email":
issErr.email=value.length<4?"atleast 4 characters required":"";

break;


case "password":



issErr.password=value.length<4  ?"atleast 4 characters required":"";
break;
default:break;

}
setInputState({...inputState,[name]:value,isError:issErr})
console.log(inputState);


    }
    const submit=(event)=>{
event.preventDefault();
console.log(inputState);
const user =inputState;
dispatchMethod(SignUp(user));
    }

    return (
       <Container className="con">
       <div class="wrapper">
         <div class="title-text">
          
            <div class="title signup">
               Signup Form
            </div>
         </div>
         <div class="form-container1">
            <div class="slide-controls">
              
              
               <div class="slider-tab"></div>
            </div>
            <div class="form-inner">
            
               <form action="#" class="signup" autocomplete="off"  onSubmit={submit}>
               <div class="field">
                     <input type="text" onChange={handleChange} name="username" placeholder="Name" />
                  
                  </div>
                  <div class="field">
                  {inputState.isError.username.length > 0  && (
                       <span>{inputState.isError.username}</span>
                     )}
                        </div>
                 
                  <div class="field">
                     <input type="text" onChange={handleChange} name="email" placeholder="Email Address" />
                     {inputState.isError.email.length > 0  && (
                       <span>{inputState.isError.email}</span>
                     )}
                  
                  </div>
               
                  <div class="field">
                     <input type="password" onChange={handleChange} name="password" placeholder="Password" />
                     {inputState.isError.password.length > 0  && (
                       <span>{inputState.isError.password}</span>
                     )}
                 
                 </div>
              
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     
                     <input type="submit" value="Signup"/>
                  </div>
               </form>
            </div>
         </div>
      </div>
      </Container>
    )
}
