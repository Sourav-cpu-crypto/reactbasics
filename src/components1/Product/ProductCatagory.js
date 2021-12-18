import React,{useState,useEffect} from 'react';
import axios from 'axios';

import Products from "./Product.json"
import {Link} from "react-router-dom";
import pcat from  './pcat.css'
export default function ProductCatagory() {
    const [productState,setProductState]=useState({
        productData:[]
    });
useEffect(()=>{
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
{productState.productData.map((value,index) =>(
     <div key={index}>
 <Link className="link" to={`/p_sub_cat/${value.p_id}`}> <h1>{value.title}</h1></Link></div>
))}

            </div>

    )
  
    }



