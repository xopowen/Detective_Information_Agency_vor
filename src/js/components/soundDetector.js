import anime from 'animejs/lib/anime.es.js';
import {OptionsAnime} from "./OptionsAnime";
const ID_SONG_DEECTOR_CARD = 'sound-detector'
const soundDetector = document.getElementById(ID_SONG_DEECTOR_CARD)

if(soundDetector){

    let timeLine =  anime.timeline(new OptionsAnime().setDelay(-150) .setLoop(true).options)

    let elems = Array.from(soundDetector.querySelectorAll('rect'))
     elems.sort((a,b)=> {
        return +a.x.baseVal.value > +b.x.baseVal.value
     })
     elems.forEach((el,index)=>{
            timeLine.add(anime(new OptionsAnime()
             .setTargets(el)

             .setBegin(()=>{
                 el.setAttribute('y',100+'')
                 el.setAttribute('height',0+'')
             })
             .setUpdate((anim)=>{
                 let value = anim.progress > 50 ? anim.progress*2 : 200 - anim.progress*2
                 value = 220-value
                 el.setAttribute('height',   value+'')
                 el.setAttribute('y',(100 - value/2)  +'')
             })
             .options
         ),`-=${index*100}`)

    })

    soundDetector.addEventListener('mouseenter',()=>{
        timeLine.pause()
    })
    soundDetector.addEventListener('mouseleave',()=>{
        timeLine.play()
    })
    soundDetector.addEventListener('mousemove',(e)=>{
        let clintX= e.clientX
        elems.forEach(el=>{
          let value = Math.abs(clintX - el.getBoundingClientRect().x)
            // el.dataset.fff= value
            el.setAttribute('y',100+'')
            el.setAttribute('height',1+'')
            if(value<=200){
                value=200-value
                el.setAttribute('y',(100 - value/2) +'')
                el.setAttribute('height',value+'')
            }

        })
    })
}
