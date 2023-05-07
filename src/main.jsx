import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin'


import { Auth0Provider } from '@auth0/auth0-react'

Kommunicate.init("3c15ac1f7d2aac35a7a8c03ff7cdee9b9" , {"popupWidget":true,"automaticChatOpenOnNavigation":true})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

 <Auth0Provider domain='dev-76c84dvsac7hjyd3.us.auth0.com' clientId='VcnJyWwdqSucHoMf2mbwx492Lx3mj6L4' redirectUri= {window.location.origin}> 
    <App /> 
     </Auth0Provider> 
  
  </React.StrictMode>,
)
