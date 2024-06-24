import initBurgerEffect from "./components/burger";
import initMainSvgAnimation from "./components/main-svg-animation";
import {animSoundDetector} from "./components/soundDetector";
const ID_SONG_DEECTOR_CARD = 'sound-detector'

initBurgerEffect()
initMainSvgAnimation()

const soundDetector = document.getElementById(ID_SONG_DEECTOR_CARD)
animSoundDetector(soundDetector)