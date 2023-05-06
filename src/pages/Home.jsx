import React from 'react'
import HeadInfo from '../componets/headerInfo/HeadInfo'
import Footer from '../componets/contact/Footer'
import Flags from '../componets/swiper/Flags'
import InformativeSection from '../componets/swiper/InformativeSection'
import CheckoutForm from '../componets/payment/CheckoutForm'
import About from './About'


const Home =()=>{

  return (

    <div>
   
    <HeadInfo/>
  <InformativeSection/>
    <Footer/>
      
    </div>
  )
}
export default Home