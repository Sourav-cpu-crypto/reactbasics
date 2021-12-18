import React,{useState}  from 'react'
import form from './form.css'
import {Navbar,Nav,Container,Form,Button}  from 'react-bootstrap' 

import {Link,useHistory} from 'react-router-dom';

import  axios  from 'axios';
export default function RegForm1() {
 

const history=useHistory()
    const [inputState,setInputState]=useState(
      {}
    )
    const handleChange=(event)=>{
       event.preventDefault();
event.persist();

let {name,value}=event.target;



setInputState({...inputState,[name]:value})
console.log(inputState);


    }

    const submit=(event)=>{
event.preventDefault();
console.log(inputState);
const user=inputState;
axios.post('https://nodeprojectapi.herokuapp.com/register',user)
.then(res =>{
   console.log("axios",res);
   
})
.catch(err=>{
   console.log(err);
})
history.push('./Login')
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
                     <input type="text" onChange={handleChange} name="fname" placeholder="First Name" />
                   
                  
                  </div>
               
                  <div class="field">
                     <input type="text" onChange={handleChange} name="lname" placeholder="Last Name" />
                  
                 
                  </div>
                  <div class="field">
                     <input type="text" onChange={handleChange} name="email" placeholder="Email Address" />
                 
                  
                  </div>
              
        
             
             
                  <div class="field">
                     <input type="password" onChange={handleChange} 
                     name="password" placeholder="Password" />
                   
                 
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
