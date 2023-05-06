import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Perfil from '././Perfil';
import SignOut from '././SignOut';
import Home from '/src/pages/Home';
import SignUp from '././SignUp';



const Register = () => {
    const {isAuthenticated} = useAuth0();
   
    return (



        <div className="style_login-bg"> 


{isAuthenticated ? <>


<Perfil/>
<SignOut/> 
{/* <Home/> */}

</> : <SignUp/>   
       

}


</div>





    )

}

export default Register