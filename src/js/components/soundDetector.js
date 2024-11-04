import anime from 'animejs/lib/anime.es.js';
import {OptionsAnime} from "./OptionsAnime";


/**
 *
 * @param {HTMLImageElement} el must contain "rect" HTMLElement
 */
export function animSoundDetector(el){

        let timeLine =  anime.timeline(new OptionsAnime().setDelay(-150) .setLoop(true).options)
        let elems = Array.from(el.querySelectorAll('rect'))
        elems.sort((a,b)=> {
            return +a.x.baseVal.value > +b.x.baseVal.value
        })
        if(elems.length === 0){
            return
        }
        let maxHeight = 0;
        let mixHeight = 1000;
        let startY = 1;
        for (const elem of elems) {
            maxHeight = +elem.height.baseVal.value > maxHeight ? +elem.height.baseVal.value  : maxHeight;
            if(+elem.height.baseVal.value < mixHeight){
                mixHeight =  +elem.height.baseVal.value
                startY = +elem.y.baseVal.value - mixHeight/2
            }

        }
    console.log(startY)
    console.log(maxHeight)


        elems.forEach((el,index)=>{
            timeLine.add(anime(new OptionsAnime()
                .setTargets(el)

                .setBegin(()=>{
                    el.setAttribute('y',100+'')
                    el.setAttribute('height',0+'')
                })
                .setUpdate((anim)=>{
                    let value = anim.progress > 50 ? maxHeight * (anim.progress/100) : maxHeight - maxHeight * (anim.progress/100)
                    value = maxHeight - value
                    el.setAttribute('height',   value > 0 ? value:1 +'')
                    el.setAttribute('y',(startY - value / 2)  +'')
                })
                .options
            ),`-=${index*100}`)

        })

        el.addEventListener('mouseenter',()=>{
            timeLine.pause()
        })
        el.addEventListener('mouseleave',()=>{
            timeLine.play()
        })
        el.addEventListener('mousemove',(e)=>{
            let clintX= e.clientX
            elems.forEach(el=>{
                let value = Math.abs(clintX - el.getBoundingClientRect().x)
                // el.dataset.fff= value
                el.setAttribute('y',startY+'')
                el.setAttribute('height',1+'')
                if(value<=maxHeight){
                    value=maxHeight-value
                    el.setAttribute('y',(startY - value/2) +'')
                    el.setAttribute('height',value+'')
                }

            })
        })


}
