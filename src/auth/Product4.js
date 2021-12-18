
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import {Row,Card,Col,CardGroup,Container} from 'react-bootstrap'


export default function Product4() {
    const [productState,setProductState1]=useState({
        productData1:[]
    });
useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res1=>{
        console.log("Products",res1);
      setProductState1({productData1:res1.data})

    }).catch(err=>{
        console.log(err);

    })
},[setProductState1])
    return (
        <div>
          
             
                 
                 <Row>
           
               
{productState.productData1.map((value,index) =>(

    
     
            <Col  md={2} key={index}>
                  
 <Link  className="link" to={`Product_d/${value.id}`}><img src={value.image} className="img1"/>
<h1>{value.title}</h1></Link>

</Col>

))}

</Row>




        </div>
    )
}


