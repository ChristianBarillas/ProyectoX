import React from "react";
import { useAuth0 } from '@auth0/auth0-react';


const SignUp = ()=> {
    
    const {loginWithRedirect} = useAuth0();
    
    return (
        
        
        
        
        <div className="style_login signUp ">
    
    <button onClick={() => { loginWithRedirect() }} class="btn btn-success btn-lg "> <i class="fas fa-user-alt"></i>Sign Up </button>
  


 



</div>

    







    )


}


export default SignUp