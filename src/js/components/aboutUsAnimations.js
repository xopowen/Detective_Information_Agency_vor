import anime from 'animejs/lib/anime.es.js';
import {EASING, OptionsAnime, OptionsStragger} from "./OptionsAnime";

let iconsFromHeaderCard = document.querySelector('.card__header')
let obs = new IntersectionObserver((entries,observer) => {

    entries.forEach(entr=>{
        let anim =  anime(new OptionsAnime().setTargets(iconsFromHeaderCard.querySelectorAll('svg path'))
            .setAnimeProperty('strokeDashoffset',[anime.setDashoffset,0])
            .setDuration(2000)
            // .setLoop(true)
            .setDelay(anime.stagger(1000))
            .setBegin((an)=>{
                an.animatables.forEach(targetAnimEl=>{
                    targetAnimEl.target.setAttribute('fill','rgba(20,34,81,0)')
                    targetAnimEl.target.setAttribute('stroke','#142251')
                })
            })
            .setEasing(EASING.linear)
            .setComplete((an=>{
                an.animatables.forEach(targetAnimEl=>{
                    targetAnimEl.target.setAttribute('fill','rgb(20,34,81)')
                })
            }))
            .options
        )
        if(entr.isIntersecting){
            anim.play()
        }
        if(entr.intersectionRatio === 0.0){
            anim.reset()
        }
    })
})

obs.observe(iconsFromHeaderCard)


