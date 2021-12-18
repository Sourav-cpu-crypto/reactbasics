
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import {Row,Card,Col,CardGroup,Container} from 'react-bootstrap'


const Getdata = () => {
    const [get,setget]=useState({
        getdata:[]
    });

    const [productState1,setProductState1]=useState("");
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
        console.log("get data",res);
      setget({ getdata:res.data})

    }).catch(err=>{
        console.log(err);

    })
},[get])

    return (
        <div>
          
             
                 
                 <Row>
    
               
{
get.getdata.map((value,index) =>{

    return (
     
            <Col  md={4} key={index}>
                  
 <Link  className="link" >
<h1></h1></Link>

</Col>
    )
})}

</Row>




        </div>
    )
}

export default Getdata
