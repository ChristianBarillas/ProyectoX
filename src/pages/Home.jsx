import React from 'react'
import HeadInfo from '../componets/headerInfo/HeadInfo'
import Footer from '../componets/contact/Footer'
import Flags from '../componets/swiper/Flags'
import InformativeSection from '../componets/swiper/InformativeSection'
import CheckoutForm from '../componets/payment/CheckoutForm'
import About from './About'
import Intro from '../componets/intros/intro'
import Description from '../componets/intros/Description'


const Home =()=>{

  return (

    <div>
   
    <HeadInfo/>
    <Intro/>
    <Description/>

  {/* <InformativeSection/>
    <Footer/> */}
      
    </div>
  )
}
export default Home