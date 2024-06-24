import Swiper from 'swiper';
import {Navigation} from "swiper/modules";

let slider = new Swiper(document.body.querySelector('#slider-service'),{
    modules:[Navigation],
    direction:'horizontal',
    loop:true,
    slidesPerView:'auto',
    slidesPerGroup: 1,
    navigation:{
        prevEl:document.querySelector('.slider__navigate-button_prev'),
        nextEl:document.querySelector(".slider__navigate-button_next")
    },
    breakpoints:{

        640: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
})
document.querySelector('.slider__navigate-button_prev').addEventListener('click',()=>{
    slider.slidePrev()
})
document.querySelector(".slider__navigate-button_next").addEventListener('click',()=>{
    slider.slideNext()
})