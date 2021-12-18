import { authConstant } from "./ActionConst";
import axios from 'axios';


export const SignUp=(user)=>{
    return async (dispatch)=>{
                
        dispatch({type:`${authConstant.USER_REGISTER}_REQUEST`});

        axios.post(`https://project-node-1.herokuapp.com/postUserData`,user)

        .then((res)=>{
            const msg=res.data.message;
            console.log(res.data.message);

            
        dispatch({type:`${authConstant.USER_REGISTER}_SUCCESS`,
        payload:{message:msg,data:res.data}})
        }).catch((err)=>{
                     
        dispatch({type:`${authConstant.USER_REGISTER}_FAILURE`,
        payload:{error:"data not registered"}})   
    
        })
    }
}

export const Login1=(user)=>{
    return async (dispatch)=>{
                
        dispatch({type:`${authConstant.USER_LOGIN}_REQUEST`});

        axios.post('https://project-node-1.herokuapp.com/postLoginData',user)

        .then((res)=>{

            const msg=res.data.message;
            console.log(res.data);

            window.localStorage('token',res.data.token);
        dispatch({type:`${authConstant.USER_LOGIN}_SUCCESS`,
        payload:{message:msg,userToken:res.data.token}})
        }).catch((err)=>{
                     
        dispatch({type:`${authConstant.USER_LOGIN}_FAILURE`,
        payload:{error:"not able to login"}})   
    
        })
    }
}

export const logout=()=>{
    return async (dispatch)=>{
                
        dispatch({type:`${authConstant.USER_LOGOUT}_REQUEST`});
if(localStorage.getItem('token')!==""){
    localStorage.clear();
    dispatch({type:`${authConstant.USER_LOGOUT}_SUCCESS`,
    
    payload:{message:"logout"}})
}
      
else{
    dispatch({type:`${authConstant.USER_LOGOUT}_SUCCESS`,
    
    payload:{message:"failed"}})

    
}
}
}

