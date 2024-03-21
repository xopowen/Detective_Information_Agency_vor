import anime from 'animejs/lib/anime.es.js';
import {OptionsAnime} from "./OptionsAnime";
/**
 * @param {string} svgID format id DOM - #<id>
 */
export default function  polaroidAnimation(svgID){

    let startColor = '#F2F3F8'
    let endColor ='#142251'

    let test = (timeLine)=>{
        document.body.querySelector(svgID).querySelectorAll('#person-container>g').forEach((el,index)=>{
            timeLine.add(
                new OptionsAnime()
                    .setAnimeProperty('fill',[startColor,endColor])
                    .setDirection('alternate')
                    .setTargets(el.querySelectorAll('path'))
                    .setEasing('easeInOutSine')
                    .options,
                1000+index*300
            )
        })
        return timeLine
    }

    let timeLine = anime.timeline( new OptionsAnime().setDuration(3000)
        .setDelay(300)
        .setLoop(true).options )
        .add( new OptionsAnime()
            .setTargets(svgID+' #person-container>g')
            .setAnimeProperty('translateX',[
                    new OptionsAnime()
                        .setAnimeProperty('value',(el,index,len)=>{
                            return index * 80
                        }).options,
                    new OptionsAnime()
                        .setDelay(1000)
                        .setAnimeProperty('value',(el,index,len)=>{
                            if(len-1 === index){
                                return 0
                            }
                            return -(el.getBoundingClientRect().width)
                        }).options
                ])
            .setEasing('linear')
            .setLoop(false)
            .options)
    test(timeLine).add(
        new OptionsAnime()
            .setTargets(svgID+' #person-container>g path')
            .setEasing('linear')
            .setAnimeProperty('fill',[ endColor,startColor])
            .options
    ,'-=300')
}


polaroidAnimation('#polaroid')