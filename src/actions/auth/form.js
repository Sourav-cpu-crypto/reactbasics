import React,{useState}  from 'react'

import form from './form.css'
import {Navbar,Nav,Container,Form,Button}  from 'react-bootstrap' 


import  axios  from 'axios';
export default function RegForm() {
 const pass1=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
 const mob1=RegExp('^[6-9][0-9]{9}$');

 

    const [inputState,setInputState]=useState(
      {isError:{fname:'',lname:'',email:'',pass:'',num:'',num1:''}}
    )
    const handleChange=(event)=>{
event.persist();

let {name,value}=event.target;
let issErr=inputState.isError;

switch(name){
case "fname":
issErr.fname=value.length<4 ?"atleast 4 characters required":"";
break;
case "lname":
issErr.lname=value.length<4?"atleast 4 characters required":"";
break;
case "email":
issErr.email=value.length<4?"atleast 4 characters required":"";

break;
case "num":
//   issErr.num1=value.length>10?"not more than 10 numbers":"";
  issErr.num=mob1.test(value)?"":"invalid";

break;

case "pass":



issErr.pass=value.length<4  ?"atleast 4 characters required":pass1.test(value)?"":"requires character,number,small and capital letters";
break;
default:break;

}
setInputState({...inputState,[name]:value,isError:issErr})
console.log(inputState);


    }
    const submit=(event)=>{
event.preventDefault();
console.log(inputState);
const user=inputState;
axios.post('https://jsonplaceholder.typicode.com/users',user)
.then(res =>{
   console.log("axios",res);
})
.catch(err=>{
   console.log(err);
})
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
                     <input type="text" onChange={handleChange} name="fname" placeholder="First Name" />
                  
                  </div>
                  <div class="field">
                  {inputState.isError.fname.length > 0  && (
                       <span>{inputState.isError.fname}</span>
                     )}
                        </div>
                  <div class="field">
                     <input type="text" onChange={handleChange} name="lname" placeholder="Last Name" autocomplete="off"/>
                     {inputState.isError.lname.length > 0  && (
                       <span>{inputState.isError.lname}</span>
                     )}
                 
                  </div>
                  <div class="field">
                     <input type="text" onChange={handleChange} name="email" placeholder="Email Address" />
                     {inputState.isError.email.length > 0  && (
                       <span>{inputState.isError.email}</span>
                     )}
                  
                  </div>
                  <div class="field">
                     <input type="text" onChange={handleChange} name="num" placeholder="number" />
                     {inputState.isError.num.length > 0  && (
                       <span>{inputState.isError.num}</span>
                     )}
                  
                  </div>
                  <div class="field">
                     <input type="password" onChange={handleChange} name="pass" placeholder="Password" />
                     {inputState.isError.pass.length > 0  && (
                       <span>{inputState.isError.pass}</span>
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
