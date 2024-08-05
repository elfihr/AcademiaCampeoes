import React from "react";
import '../style/Testimonials.css'
import { testimonials } from "../helper/Helper";


import { Swiper, SwiperSlide } from 'swiper/react';
//==================Import Swiper styles==================
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Testimonials = () => {

  return (
    <div className='testimonials' id='testimonials'>
      <h3 className='title'>Feed<span className='blue'>Back</span></h3>
      <p className='sub_title'>Veja a <span className='blue'>Opinião</span> dos Nossos <span className='blue'>Alunos</span></p>
      <div className='testimonials_wrapper'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,

          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((client, index) => {
            return (
              <SwiperSlide key={index}>

                <span className='goldborderImg'>
                  <img src={client.img} className='testimonialsImg' alt='depoimentos'></img>
                </span>
                <div className="testomonials_container-description">
                  <h4 className='description'>{client.name}</h4>
                  <p className='sub_description'>{client.description}</p>
                </div>

              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials