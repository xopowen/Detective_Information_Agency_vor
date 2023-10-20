import anime from 'animejs/lib/anime.es.js';


/**
 * @description set animation in svg with id = #main-svg.
 * @depended anime.js
 * @see anime
 */
export default function  initMainSvgAnimation(){

    /**
     * animation point for svg - main-svg
     */
    anime({
        targets:'#main-svg .point' ,
        translateX: 360,
        translateY: 208,
        easing: 'linear',
        direction: 'alternate',
        duration: 2000,
        loop: true,
        delay: function(el, i, l) {

            return (l - i) * 100;
        },
        endDelay: function(el, i, l) {
            return (l - i) * 100;
        }
    })


    /**
     * add anim for #main-svg #circle-icons > g
     */
    let circleIcons = document.querySelectorAll('#main-svg #circle-icons > g')
    let circleIconsTimeLine =  anime.timeline({
        easing:'easeInQuad',
        loop:true,
        duration: 1000,
        direction:'alternate',
        endDelay:200
    })

    circleIcons.forEach((v,i)=>{
        let anime_blanks = {
            '0':{
                targets:v,
                translateX:-28,
                translateY:54
            },
            '1':{
                targets:v,
                translateX:71,
                translateY:18,
            },
            '2':{
                targets:v,
                translateX:16,
                translateY:65,
            },
            '3':{
                targets:v,
                translateX: [
                    { value: 3,duration: 1000 , delay: 300 },
                    { value: -125, duration: 1000 , delay: 300 }
                ],
                translateY: [
                    { value: 132,duration: 1000 , delay: 300 },
                    { value: 164, duration: 1000 ,delay: 300},

                ],
            },
            '4':{
                targets:circleIcons[4],
                translateX:-78,
                translateY:-12,
            },
        }

        circleIconsTimeLine.add(anime_blanks[i+''] || {} )
    })

}




