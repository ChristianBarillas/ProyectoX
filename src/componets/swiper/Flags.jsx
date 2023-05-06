import React from 'react'
import america from '/src/assets/img/flags/us.png'
import uk from '/src/assets/img/flags/uk.png'
import australia from '/src/assets/img/flags/australia.png'
import canada from '/src/assets/img/flags/canada.png'


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// Import Swiper styles
import 'swiper/css';

const Flags =() => {
  return (
   

    <Swiper

    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    >
      <SwiperSlide>
        <img src={america}/>
      </SwiperSlide>
    

        <SwiperSlide>
      <img src={australia}/>
        </SwiperSlide>


        <SwiperSlide>
      <img src={uk}/>
        </SwiperSlide>


        <SwiperSlide>
      <img src={canada}/>
        </SwiperSlide>
   
    
      ...
    </Swiper>


  );
};



export default Flags