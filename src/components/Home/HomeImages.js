import React from 'react';
import Swiper from 'react-id-swiper';
import Honda from "./assets/Honda.jpg";
const Parallax = () => {
    const params = {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: '.swiper-pagination',
        }
      }
      return (
        <Swiper {...params}>
          <div style={{ backgroundImage:'url(https://picsum.photos/id/237/200/300)' }} />
          
        </Swiper>
      )
    };
export default Parallax;