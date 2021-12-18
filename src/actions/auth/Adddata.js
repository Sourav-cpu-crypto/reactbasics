import React,{useState}  from 'react'

import form from './form.css'
import {Navbar,Nav,Container,Form,Button}  from 'react-bootstrap' 


import {Link,useHistory} from 'react-router-dom';
import  axios  from 'axios';

export default function Adddata() {
const history=useHistory()
 const email1=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
 const name1=RegExp('^[a-z]{2}$');

 

    const [inputState,setInputState]=useState(
      {isError:{name:'',email:''}}
    )
    const handleChange=(event)=>{
event.persist();

let {name,value}=event.target;
let issErr=inputState.isError;

switch(name){
    case "name":
        issErr.name=name1.test(value)?"invalid": issErr.name=value.length> 20 ?"atleast 20 characters required":"" ;
break;

case "email":
    issErr.name=email1.test(value)?"":"invalid";

break;

case "phone":
    issErr.phone=value.length> 10 ?"atleast 10 digits required":"" ;

break;

default:break;

}
setInputState({...inputState,[name]:value,isError:issErr})
console.log(inputState);


    }
    const submit=(event)=>{
event.preventDefault();
console.log(inputState);
let user =inputState;
axios.post('https://jsonplaceholder.typicode.com/users',user)
.then(res =>{
   console.log("axios",res);
   
})
.catch(err=>{
   console.log(err);
})

history.push("./Getdata")
    }

    return (
       <Container className="con">
       <div class="wrapper">
         <div class="title-text">
          
           ADD EMPLOYEE DATA
         </div>
         <div class="form-container1">
            <div class="slide-controls">
              
              
               <div class="slider-tab"></div>
            </div>
            <div class="form-inner">
            
               <form action="#" class="signup" autocomplete="off"  onSubmit={submit}>
             
        
                  <div class="field">
                     <input type="text" onChange={handleChange} name="name" placeholder="name" />
                     {inputState.isError.name.length > 0  && (
                       <span>{inputState.isError.name}</span>
                     )}
                  </div>
               <div class="field">
                     <input type="text" onChange={handleChange} name="username" placeholder="username" />
                  
                  </div>
                
                 
                  <div class="field">
                     <input type="text" onChange={handleChange} name="email" placeholder="Email Address" />
                     {inputState.isError.email.length > 0  && (
                       <span>{inputState.isError.email}</span>
                     )}
                  
                  </div>
                  <div class="field">
                     <input type="number" onChange={handleChange} name="phone" placeholder="" />
                    
                  
                  </div>
              
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     
                     <input type="submit" value="ADD DATA"/>
                  </div>
               </form>
            </div>
         </div>
      </div>
      </Container>
    )
}
