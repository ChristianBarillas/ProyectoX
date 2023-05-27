import React from 'react'
import HeadInfo from '../componets/headerInfo/HeadInfo'
import Details1 from '../componets/details/Details1'
import Intro1 from '../componets/intros/Intro1'
import Details2 from '../componets/details/Details2'
import ScrollAnimationComponent from '../componets/scroll/scroll'



const Home =()=>{

  return (

    <div>
   
    <HeadInfo/>
    <Intro1/>
   <ScrollAnimationComponent/>
    <Details1/>
    <Details2/>
    
    

  {/* <InformativeSection/>
    <Footer/> */}
      
    </div>
  )
}
export default Home