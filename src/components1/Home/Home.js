import React from 'react'
import './Home.css'
export default function Home({match}) {
    console.log({match});
  
        return (
            <div className="Home"> 
               <h1> Home page{match.params.value}</h1>
            </div>
        )
    }



