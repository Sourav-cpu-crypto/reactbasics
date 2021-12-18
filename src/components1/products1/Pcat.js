
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import {Row,Card,Col,CardGroup,Container} from 'react-bootstrap'


const Pcat = () => {
    const [productState,setProductState]=useState({
        productData:[]
    });

    const [productState1,setProductState1]=useState("");
useEffect((event)=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
        console.log("Products",res);
      setProductState({ productData:res.data})

    }).catch(err=>{
        console.log(err);

    })
},[setProductState])

    return (
        <div>
          
             
                 
                 <Row>
                 <input
         type="text"
            placeholder="search" onChange={(event)=>{
                setProductState1(event.target.value)
            }}
          />    
               
{
productState.productData.filter((value)=>{
    if (productState1 ===""){
        return value;
    }
    else if(value.title.toLowerCase().includes(productState1.toLowerCase()))
    {
        return value;
    }
}).map((value,index) =>{

    return (
     
            <Col  md={4} key={index}>
                  
 <Link  className="link" to={`item_sub_catagory/${value.category}`}><img src={value.image} className="img1"/>
<h1>{value.title}</h1></Link>

</Col>
    )
})}

</Row>




        </div>
    )
}

export default Pcat
