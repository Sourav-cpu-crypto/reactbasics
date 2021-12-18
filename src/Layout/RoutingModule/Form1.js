import React from 'react'
import {useFormik}  from 'formik';
import Form2 from './Form2.css'
const ValidateValues=(formValue)=>{

const errors={}
 const mob1=RegExp('^[6-9][0-9]{9}$');
if(!formValue.fname){
    
errors.fname="please enter name"
}
else if(formValue.fname.length <5)
{
   errors.fname=" name should contains more than 5 characters" 
}
if(!formValue.add){
    
errors.add="please enter address"
}
else
{
    errors.add="";
}
if(!formValue.cont){
    
errors.cont="please enter contact details"
}
else if(!mob1.test(formValue.cont))
{
    errors.cont="invalid contact";
}
if(!formValue.email){
    
errors.email="please enter email"
}
else
{
    errors.email="";
}
return errors;
}
export const Form1 = () => {
    const formik=useFormik({
initialValues:{
fname:'',
add:'',
cont:'',
email:''
},
validate:ValidateValues,
   onSubmit:(values)=>
    {
        console.log("Submitted values:",values);
    }

    })
 
    
    return (
        <div>
        <div  className="f1">

  <form   onSubmit={formik.handleSubmit}>
<div className="f3">

    <div>
 
      <input type="text" className="t1" value={formik.values.fname} id="fname" name="fname"  placeholder="Your name.. " onChange={formik.handleChange}/>

 
                       {formik.errors.fname ?(<span style={{color:'red'}}>{formik.errors.fname}</span>):null}
                    
     </div>

    <div>
      <input type="text" className="t1" value={formik.values.add}  id="add" name="add" placeholder="address" onChange={formik.handleChange}/>
 {formik.errors.add ?(<span style={{color:'red'}}>{formik.errors.add}</span>):null}

    </div>
                    
    <div>
 
      <input type="text"  className="t1" value={formik.values.cont}  id="cont" name="cont" placeholder="contact" onChange={formik.handleChange}/>

                     {formik.errors.cont ?(<span style={{color:'red'}}>{formik.errors.cont}</span>):null}
                 
    </div>
    
 
    <div>
      <input type="email" className="t1" value={formik.values.email}  id="email" name="email" placeholder="email"  onChange={formik.handleChange}/>
{formik.errors.email ?(<span style={{color:'red'}}>{formik.errors.email}</span>):null}
               
    </div>

    <div>

    <button type="submit" disabled={!(!formik.isValid && formik.dirty )}>Submit</button>

    </div>
</div>
  </form>

</div>

</div>  
    )
}
