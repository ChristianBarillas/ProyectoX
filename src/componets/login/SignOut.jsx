import React from "react";
import { useAuth0 } from '@auth0/auth0-react';


const SignOut = () => {

    const {logout} = useAuth0();

    return (
    
    
    <div className="style_login loginOut ">

    
    <button onClick={()=>{ logout({returnTo: window.location.origin})}}class="btn btn-success btn-lg "> <i class="fas fa-user-alt"></i>loginOut</button>

  





    </div>

    )

}


export default SignOut