import {EASING,OptionsAnime,OptionsStragger, ANIM_PROPERTY} from "./OptionsAnime";
import anime from "animejs/lib/anime.es.js";

let sliderItemFiles = document.body.querySelector('#slider-item-fils')

let timeLine = anime.timeline(new OptionsAnime()
    .setTargets(sliderItemFiles.querySelectorAll('svg'))
    .setEasing(EASING.linear)
    .setLoop(true)
    .options)


    sliderItemFiles.querySelectorAll('svg').forEach((el,index)=>{
        let elContainer = el.getBoundingClientRect()
        timeLine.add(new OptionsAnime()
            .setAnimeProperty(ANIM_PROPERTY.transform.translateX,
                -elContainer.width*(index )
            )
            .options,'+=100'
        ).add(new OptionsAnime()
            .setTargets(el)

            .setAnimeProperty(ANIM_PROPERTY.transform.scale,[new OptionsAnime()
                .setEasing(EASING.inOut.easeInOutBack)
                .setAnimeProperty('value',1.3).setDuration(1000).setEndDelay(1000).options,
                new OptionsAnime()
                    .setAnimeProperty('value',1.0).options
            ])
            .options,'+=100'
        )

    })
timeLine.add(new OptionsAnime()
    .setAnimeProperty(ANIM_PROPERTY.transform.translateX,0
    )
    .options,'+=100'
)


