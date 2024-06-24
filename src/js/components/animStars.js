import anime    from "animejs/lib/anime.es.js";
import {OptionsAnime,ANIM_PROPERTY,OptionsStragger,EASING} from "./OptionsAnime";



export function animStart(el){
    anime(new OptionsAnime()
        .setTargets(el.querySelectorAll('g>path'))
        .setKeyframes([ {'rotate':90,'transformY':-20},{'rotate':0,'transformY':0}])
        .setDelay((el, i) => i * 150)
        .setEndDelay(100)
        .setLoop(true)
        .setDuration(3000)
        .options)
}

animStart(document.querySelector('#start-container'))