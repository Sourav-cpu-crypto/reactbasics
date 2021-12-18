
// import React,{useState,useEffect} from 'react';
// import axios from 'axios';
// import {Link} from "react-router-dom";
// import Psubcat1  from  './Psubcat1.css'
// import {Row,Card,Col,CardGroup,Container} from 'react-bootstrap'


// export default function Product1() {
//     const [productState2,setProductState2]=useState({
//         productData:[]
//     });
   
// useEffect(()=>{

//     axios.get(`https://fakestoreapi.com/products`)
//     .then(res=>{
      
//          console.log(res);

//             setProductState2({productData:res.data})
//             console.log("Products1",productState2.productData);
     
//     }).catch(err=>{
//         console.log(err);

//     })
// },[setProductState2])



// return (
//         <div>
        



//                  <div className="container" className="">
//                  <CardGroup >
//                  <Row className="g-4">
       
//             {productState2.productData.map((value,index)=>( 
//            <Col md={3}  key={index}>
             
//              <Card className="pcat">
//              <Card.Img variant="top" src={value.image}  className="img1"/>
//              <Card.Body>
//                <Card.Title>{value.title}</Card.Title>
//                <Link  className="link" to={`/item_details/${value.id}`}><button>View Details</button></Link>
//              </Card.Body>
            
        
 
      
           
//            </Card>
          
//            </Col>
//         ))}  
       
//            </Row>
       
//         </CardGroup>
       
      
// </div>
//         </div>
//     )
// }


