import React,{useState} from 'react'
import prodcat from './Product.json'
import pdetails from './pdetails.css'
import {Row,Card,Col,CardGroup,Container} from 'react-bootstrap'

import {Link} from "react-router-dom";

export default function ProductDetails(props) {
  const [state,setstate]=useState([]);
  const [image2,setImage2]=useState(0);
    let data= prodcat.Product.find(data=>data.p_id === props.match.params.prodId1)
    const data1= data.subCategory.find(value=>value.s_id === props.match.params.sub_id)
   function su(){
setstate([...state,2])
   }
function fun2(index){

  setImage2(image2 => index);
}
  
        return (
 
        <Container>
                <CardGroup className="g1">


                        <Row>
            <Col md={8}>
              
         
             <Card >
             <Card.Img variant="top" src={data1.images[image2].image}  />
             <Card.Body>
               <Card.Title>Company Name:{data1.company}</Card.Title>
               <Card.Title>Price:{data1.price}</Card.Title>
               <Card.Title>  

 4GB RAM, 64GB Storage
 6000 mAh with 8nm Processor </Card.Title>
               <Card.Title>  <button className="b1">BUY NOW</button></Card.Title>
               <Card.Title>  <button className="b1" onClick={su}> ADD TO CART</button></Card.Title>
            
            
             </Card.Body>     
        
</Card>
</Col>
</Row>
<div className="s2">
{data1.images.map((data1,index)=>( 
<Row >
<Col  >
<h1>     <button> <img className="s2" key={index} src={data1.image} onClick={()=>fun2(index)} /></button></h1>
</Col>

</Row>
))
}

</div>

        </CardGroup>

        </Container>
      
    
       )
    }



