import {EFFECT_CLASS as addClassForEffect} from "./constants";

export  let burgerButton = document.querySelector('.menu__tachBord')

if(burgerButton){
    burgerButton.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle("menu__tachBord" + addClassForEffect.active)
        e.preventDefault()
    })
}


