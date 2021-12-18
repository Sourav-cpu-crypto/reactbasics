
import React,{useState,useEffect} from 'react';
import   Psubcat1    from './Psubcat1.css'
import axios from 'axios';
import {Link} from "react-router-dom";
import {Row,Card,Col,CardGroup,Container} from 'react-bootstrap'


export default function Pdeatails({match}) {
    let sp={}
    let rate1=""
 
    const [productState1,setProductState1]=useState(
       { productData:[]}
    );
    const [p,setp]=useState(
     {k:""}
   );
   var [s1,sets1]=useState(
    0
);
function cart(){
sets1(s1++)

}
    // prodId3
    const categoryid2=match.params.prod_id;
    const url=`https://fakestoreapi.com/products/${categoryid2}`
useEffect(()=>{

    axios.get(url)
    .then(res=>{
      
         
        console.log("res",res);
        setProductState1({productData:res.data})
  
     rate1= res.data["rating"]["rate"];
     console.log("Products1",productState1.productData.rating.rate);
       setp({k:rate1});
       
        console.log("type of",p.k);

            
           
            // let i =0;
            // for(let i =0;i<productState1)
     
     
    }).catch(err=>{
        console.log(err);

    })
    
},[url])

function cart2(){
  
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
               <Card.Title className="cate">{productState1.productData.category}</Card.Title>
               <Card.Title>Price:{productState1.productData.price}</Card.Title>
          
       
            <h3>{p.k}ss</h3>
            <Card.Text>
    



            Quantity:<input type="number" value="" />
    </Card.Text>
  
      <Card.Text>
               About This Item
    </Card.Text>


               <Card.Text className="cate4">
             {productState1.productData.description}
    </Card.Text>
    <Card.Text className="cate4">
            <button className="cart2" onClick={cart}>ADD TO CART</button>
       
    </Card.Text>
{s1}
             </Card.Body>
            
        
 
      
           
        
          
           </Col>
       
       
           </Row>
       
   
       
          
</div>
      
    )
}


