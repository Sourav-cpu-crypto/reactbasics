
import React,{useState,useEffect} from 'react';
// import   Psubcat1    from './Psubcat1.css'
import axios from 'axios';
import {Link} from "react-router-dom";
import {Row,Card,Col,CardGroup,Container} from 'react-bootstrap'


export default function Productd({match}) {

    const [productState2,setProductState2]=useState(
      
       );
    const [productState1,setProductState1]=useState(
       { productData:[]}
    );
    

    const categoryid2=match.params.p2;
useEffect(()=>{

    axios.get(`https://fakestoreapi.com/products/${categoryid2}`)
    .then(res=>{
      
         
        console.log("res",res);
        setProductState1({productData:res.data})
            console.log("Products1",productState1);
           
     
    }).catch(err=>{
        console.log(err);

    })
},[setProductState1])

function fun(){
  let c="uu"
  window.sessionStorage.setItem("token",c);
}

return (
    
                 <div className="container container4">
             
                 <Row className="g-4">
       

           <Col md={4} >
             
             <Card >
             <Card.Img variant="top" src={productState1.productData.image}  className="img1 img3"/>
             <Card.Body>
               <Card.Title>{productState1.productData.title}</Card.Title>
               <Card.Title>Price:{productState1. productData.price}</Card.Title>
             </Card.Body>
            
        
 
      
           
           </Card>
          
           </Col>
       
           <Col md={3} className="detp3" >
             
       
            
             <Card.Body>
        
               <Card.Title>Price:{productState1.productData.price}</Card.Title>
          
           
          
  
      <Card.Text>
               About This Item
    </Card.Text>


               <Card.Text className="cate4">
             {productState1.productData.description}
    </Card.Text>
    <Card.Text className="cate4">
            <button className="cart2" onClick={fun}>ADD TO CART</button>
    </Card.Text>
  
             </Card.Body>
            
        
 
      
           
        
          
           </Col>
       
       
           </Row>
       
   
       
          
</div>
      
    )
}


