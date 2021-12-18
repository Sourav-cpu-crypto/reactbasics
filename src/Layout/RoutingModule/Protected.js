import react from 'react';
import  {Redirect} from 'react-router';
const Protected =(props)=>{
    let ProtectedCom=props.component;
    let islog=window.sessionStorage.getItem('token');
    return islog?(<ProtectedCom/>):(<Redirect to="/Login"></Redirect>)

}
export default Protected;