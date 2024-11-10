import Swiper from 'swiper';
import {Navigation} from "swiper/modules";


/**
 * @type {Swiper}
 */
let slider = new Swiper(document.body.querySelector('#slider-service'),{
    modules:[Navigation],
    direction:'horizontal',
    loop:true,
    autoHeight:false,
    setWrapperSize:true,
    slidesPerView:'auto',
    slidesPerGroup: 1,
    spaceBetween: 40,
    navigation:{
        prevEl:document.querySelector('.slider__navigate-button_prev'),
        nextEl:document.querySelector(".slider__navigate-button_next")
    }

})
//
// document.querySelector('.slider__navigate-button_prev').addEventListener('click',()=>{
//     slider.slidePrev()
// })
// document.querySelector(".slider__navigate-button_next").addEventListener('click',()=>{
//     slider.slideNext()
// })