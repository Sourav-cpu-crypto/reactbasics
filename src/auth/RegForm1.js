import React,{useState}  from 'react'

import {Navbar,Nav,Container,Form,Button}  from 'react-bootstrap' 

import {Link,useHistory} from 'react-router-dom';

import  axios  from 'axios';
export default function RegForm1() {
 const pass1=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
 const fname1=RegExp('[a-z]{3}');
 const lname1=RegExp('[a-z]{3}');
 const mob1=RegExp('^[0-9]');
 
const history=useHistory();

 const email1=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$');

    const [inputState,setInputState]=useState(
      {isError:{fname:'',lname:'',email:'',pass:'',num:'',num1:'',state:''}}
    )
    const handleChange=(event)=>{
event.persist();

let {name,value}=event.target;
let issErr=inputState.isError;

switch(name){
case "fname":
    issErr.fname=fname1.test(value)?"":"minimum three characters";

break;
case "lname":
    issErr.lname=lname1.test(value)?"":"minimum three characters";
break;
case "email":
    issErr.email=email1.test(value)?"":"invalid";

break;
case "num":
//   issErr.num1=value.length>10?"not more than 10 numbers":"";
  issErr.num=mob1.test(value)?"":"invalid";

break;

case "pass":



issErr.pass=value.length<4  ?"atleast 4 characters required":pass1.test(value)?"":"requires character,number,small and capital letters";
break;
case "state":



issErr.state=value.length<1  ?"no blank space":"";
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
history.push('./Product4')
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
   
           
               <label for="signup" class="slide signup">
               <Link  className="link">Register</Link>
               </label>
              
           
            <div class="form-inner">
            
               <form action="#" class="signup"   onSubmit={submit}>
               <div class="field">
                     <input type="text" autocomplete="off" onChange={handleChange} name="fname" placeholder="First Name" />
                  
                  </div>
                  <div class="field">
                  {inputState.isError.fname.length > 0  && (
                       <span>{inputState.isError.fname}</span>
                     )}
                        </div>
                  <div class="field">
                     <input type="text" onChange={handleChange} name="lname" placeholder="Last Name" />
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
                     <input type="text" onChange={handleChange} name="num" placeholder="Phone" />
                     {inputState.isError.num.length > 0  && (
                       <span>{inputState.isError.num}</span>
                     )}
                  
                  </div>
                 
                  <select class="field"  type="text"  onChange={handleChange} name="state">
  <option value="west bengal">west bengal</option>
  <option value="jharkhand">jharkhand</option>
  
</select>
             
                     {inputState.isError.state.length > 0  && (
                       <span>{inputState.isError.state}</span>
                     )}
                  
                  <div class="field">
                     <input type="text" onChange={handleChange} name="city" placeholder="city" />
                    
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
