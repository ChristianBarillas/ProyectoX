import React from "react";
import { useAuth0 } from '@auth0/auth0-react';


const Perfil = ()=> {

    const {user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading){
        return <di>Loading... Please wait!</di>
    }

    return (isAuthenticated &&(

         
        <div className="profilelogi">

<h2>{user.name}</h2>
{/* <p>Email: {user.email}</p> */}
<img src= {user.picture} alt ={user.name}/>


        </div>
    )
        
        
        
        
        
        
        ) 


    }



export default Perfil