import {EFFECT_CLASS as addClassForEffect} from "./constants";

/**
 * @description add click of event on #burger
 * @description 1 click add class menu__tachBord+addClassForEffect.active.disable scroll document.body.
 * @description 2 click remove class menu__tachBord+addClassForEffect.active.
 * @description allow scroll document.body.
 * @see addClassForEffect
 */
export default function initBurgerEffect(){
    let burgerButton = document.querySelector('#burger')
    if(burgerButton){
        burgerButton.addEventListener('click', (e) => {
            let statusAddClass = e.currentTarget.classList.toggle("menu__tachBord" + addClassForEffect.active)
            statusAddClass ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
            e.preventDefault()
        })
    }
}


