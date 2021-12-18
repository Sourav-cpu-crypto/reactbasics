
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Psubcat1  from  './Psubcat1.css'
import {Row,Card,Col,CardGroup,Container} from 'react-bootstrap'


export default function Psubcat({match}) {
    const [productState2,setProductState2]=useState({
        productData:[]
    });
    const categoryname=match.params.prodId2;
useEffect(()=>{

    axios.get(`https://fakestoreapi.com/products/category/${categoryname}`)
    .then(res=>{
      
         console.log(res);

            setProductState2({productData:res.data})
            console.log("Products1",productState2.productData);
     
    }).catch(err=>{
        console.log(err);

    })
},[setProductState2])



return (
        <div>
        



                 <div className="container" className="">
                 <CardGroup className="g2">
          
       
            {productState2.productData.map((value,index)=>( 
          
             
             <Card className="pcat">
             <Card.Img variant="top" src={value.image}  className="img1"/>
             <Card.Body>
               <Card.Title>{value.title}</Card.Title>
               <Link  className="link" to={`/item_details/${value.id}`}><button>View Details</button></Link>
             </Card.Body>
            
        
 
      
           
           </Card>
          
    
        ))}  
       
        
       
        </CardGroup>
       
      
</div>
        </div>
    )
}


