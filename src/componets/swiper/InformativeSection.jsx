// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const InformativeSection =() => {
  return (
    <Swiper
      // install Swiper modules
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
      <article className="popular__card swiper-slide">
                                <img src="assets/img/university.jpg" alt="" className="popular__img" loading="lazy"/>
    
                                <div className="popular__data">
                                    <h2 className="popular__price">
                                        <span>English Vocabulary</span>
                                    </h2>
                                    <h3 className="popular__title">
                                    Most used words and phrases
                                    </h3>
                                    <p className="popular__description">
                                    with these lessons you will learn vocabulary in different categories
                                    </p>
                                </div>
                            </article>
      </SwiperSlide>

      <SwiperSlide>
      <article className="popular__card swiper-slide">
                                <img src="assets/img/graduation.jpg" alt="" className="popular__img" loading="lazy"/>
    
                                <div className="popular__data">
                                    <h2 className="popular__price">
                                        <span>English grammar</span>
                                    </h2>
                                    <h3 className="popular__title">
                                    A1-A2 B1-B2 C1-C2
                                    </h3>
                                    <p className="popular__description">
                                    In this course you will learn the necessary grammar in English
                                    </p>
                                </div>
                            </article>

      </SwiperSlide>

      <SwiperSlide>
      <article className="popular__card swiper-slide">
                                <img src="assets/img/imagen01.jpeg" alt="" className="popular__img" loading="lazy" />
    
                                <div className="popular__data">
                                    <h2 className="popular__price">
                                        <span>Tenses </span>
                                    </h2>
                                    <h3 className="popular__title">
                                    Learn 16 tenses
                                    </h3>
                                    <p className="popular__description">
                                    With these lessons you will learn the most used verb tenses in English.
                                    </p>
                                </div>
                            </article>

      </SwiperSlide>

      <SwiperSlide>

      <article className="popular__card swiper-slide">
                                <img src="assets/img/kodigo.jpg" alt="" className="popular__img" loading="lazy"/>
    
                                <div className="popular__data">
                                    <h2 className="popular__price">
                                        <span>Idiomatic expression </span>
                                    </h2>
                                    <h3 className="popular__title">
                                       UK - U.S
                                    </h3>
                                    <p className="popular__description">
                                    In these lessons you will learn the expressions of various regions
                                    </p>
                                </div>
                            </article>

      </SwiperSlide>
     
    </Swiper>
  );
};

export default InformativeSection