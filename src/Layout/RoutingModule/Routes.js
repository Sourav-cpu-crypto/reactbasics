import React,{lazy,Suspense} from 'react'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
// import RegForm from '../../auth/form.js'
import Register from '../../auth/register.js'
import RegForm1 from '../../auth/RegForm1.js'
import Login from '../../auth/login.js'

import {Form1} from './Form1.js'
import Product4 from '../../auth/Product4.js'
import Productd from '../../auth/Productd.js'
import Protected  from './Protected.js'
import A from '../../components/A.js'
import Ref  from './Ref.js'
import Reduce  from './Reduce.js'
import ProductCatagory from '../../components1/Product/ProductCatagory.js'
import ProductDetails from '../../components1/Product/ProductDetails.js'
import ProductSubCat from '../../components1/Product/ProductSubCat.js'

import Header from '../Header/Header.js'
// import{ home}  from './home.js'
import Pcat from '../../components1/products1/Pcat.js'
import Psubcat from '../../components1/products1/Psubcat.js'
import Pdeatails from '../../components1/products1/Pdeatails.js'
// import Psubcat from '../../components1/products1/Psubcat.js'

const feedback=lazy(()=>import("./feedback.js"));

export default function Routes() {
  let islog=window.sessionStorage.getItem('token');
    return (
      
        <Router>

        <Header/>
     
        <Switch>
        {/* <Route exact path="/" component={home}></Route> */}
   
        
            <Suspense fallback={<h1>Loading...</h1>}>
           {/* <Route path="/Register" component={RegForm}></Route> */}
         
  
                
            <Route path="/item_sub_catagory/:prodId2" component={Psubcat}></Route> 
                      <Route path="/item_catagory" component={Pcat}></Route>
                      <Route path="/item_details/:prod_id" component={Pdeatails}></Route>
             <Route path="/Login" component={Login}></Route>
               <Route path="/Register1" component={RegForm1}></Route>
               <Protected path="/Product4" component={Product4}></Protected>
            <Route path="/Product_d/:p2" component={Productd}></Route>
            <Route path="/Register2" component={Register}></Route>
            <Route path="/Ref" component={Ref}></Route>
          <Route path="/Form" component={Form1}></Route>
        
            <Route path="/Reduce" component={Reduce}></Route>
           
            <Route path="/A" component={A}></Route>
     </Suspense>
  
       <Route render={()=><h1>error not found</h1>}/>
   
        </Switch>
    </Router>
    )
}

