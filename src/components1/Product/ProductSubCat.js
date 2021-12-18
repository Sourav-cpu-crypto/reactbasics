import React from 'react'
import prodcat from './Product.json'
import {Row,Card,Col,CardGroup} from 'react-bootstrap'
import Product from './Product.json'
import {Link} from "react-router-dom";
import psubcat from './psubcat.css'

export default function ProductSubCat({match}) {
    const data= prodcat.Product.find(data=>data.p_id === match.params.prodId)
  
        return (
           
            <CardGroup className="g1">
                 <Row className="g-4">
       
            {data.subCategory.map((data1,index)=>( 
           <Col md={3} key={index}>
             
             <Card>
             <Card.Img variant="top" src={data1.images[0].image}  className="img1"/>
             <Card.Body>
               <Card.Title>{data1.company}</Card.Title>
               <Link to={`/p_details/${match.params.prodId}/${data1.s_id}`}><button className="b1"> Click</button></Link>
            
             </Card.Body>
            
        
 
      
           
           </Card>
          
           </Col>
        ))}  
       
           </Row>
       
        </CardGroup>
       
      


      
       )
    }



