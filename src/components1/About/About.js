import React from 'react'
import { useHistory } from 'react-router'
import {useParams} from 'react-router-dom'

export default function About() {
    const {id} =useParams()
  const history=useHistory()
        return (
            <>
                <h1>{id}</h1>
                <button onClick={()=>history.push('/home_page')}>go to home</button>
            </>
        )
    }


