/**
 *
 * @type {Readonly<{outIn: {easeOutInQuad: string, easeOutInQuart: string, easeOutInExpo: string, easeOutInBounce: string, easeOutInQuint: string, easeOutInSine: string, easeOutBounce: string, easeOutInCubic: string, easeOutInCirc: string, easeOutInBack: string}, spring(Number, *, *, *): string, inOut: {easeInOutCirc: string, easeInOutSine: string, easeInOutBack: string, easeInBounce: string, easeInOutQuad: string, easeInOutCubic: string, easeInOutQuint: string, easeInOutBounce: string, easeInOutQuart: string, easeInOutExpo: string}, in: {easeInQuad: string, easeInExpo: string, easeInCubic: string, easeInQuint: string, easeInQuart: string, easeInBack: string, easeInSine: string, easeInCirc: string}, elastic(string, Number, (Number|CSSStyleDeclaration.float)): string, steps(Number): string, out: {easeOutCubic: string, easeOutQuart: string, easeOutQuint: string, easeOutQuad: string, easeOutExpo: string, easeOutSine: string, easeOutCirc: string, easeOutBack: string}}>}
 * @see https://easings.net/
 * @description
 *    Object with enumerates easing and functions need for create a custom easing-function
 */
export const EASING = Object.freeze({
    in: {
        'easeInQuad': 'easeInQuad',
        'easeInCubic': 'easeInCubic',
        'easeInQuart': 'easeInQuart',
        'easeInQuint': 'easeInQuint',
        'easeInSine': 'easeInSine',
        'easeInExpo': 'easeInExpo',
        'easeInCirc': 'easeInCirc',
        'easeInBack': 'easeInBack',
    },
    out: {
        'easeOutQuad': 'easeOutQuad',
        'easeOutCubic': 'easeOutCubic',
        'easeOutQuart': 'easeOutQuart',
        'easeOutQuint': 'easeOutQuint',
        'easeOutSine': 'easeOutSine',
        'easeOutExpo': 'easeOutExpo',
        'easeOutCirc': 'easeOutCirc',
        'easeOutBack': 'easeOutBack',
    },
    inOut: {
        'easeInBounce': 'easeInBounce',
        'easeInOutQuad': 'easeInOutQuad',
        'easeInOutCubic': 'easeInOutCubic',
        'easeInOutQuart': 'easeInOutQuart',
        'easeInOutQuint': 'easeInOutQuint',
        'easeInOutSine': 'easeInOutSine',
        'easeInOutExpo': 'easeInOutExpo',
        'easeInOutCirc': 'easeInOutCirc',
        'easeInOutBack': 'easeInOutBack',
        'easeInOutBounce': 'easeInOutBounce',
    },
    outIn: {
        'easeOutBounce': 'easeOutBounce',
        'easeOutInQuad': 'easeOutInQuad',
        'easeOutInCubic': 'easeOutInCubic',
        'easeOutInQuart': 'easeOutInQuart',
        'easeOutInQuint': 'easeOutInQuint',
        'easeOutInSine': 'easeOutInSine',
        'easeOutInExpo': 'easeOutInExpo',
        'easeOutInCirc': 'easeOutInCirc',
        'easeOutInBack': 'easeOutInBack',
        'easeOutInBounce': 'easeOutInBounce'
    },
    linear:'linear',
    /**
     *
     * @param {Number} mass Min 0, Max 100
     * @default 1
     * @param stiffness Min 0, Max 100
     * @default 100
     * @param damping Min 0, Max 100
     * @default 10
     * @param velocity Min 0, Max 100
     * @default 0
     * @return {string}
     */
    spring(mass, stiffness, damping, velocity) {
        return `spring(${mass}, ${stiffness}, ${damping}, ${velocity})`
    },

    /**
     *
     * @param {Number} value Min = 1, Max= Infinity.
     * Определяет количество переходов, которые требуется анимации для достижения конечного значения.
     * @return {string}
     */
    steps(value) {
        return `steps(${value})`
    },
    /**
     *
     * @param {string} easing
     * @see easings
     * @param {Number} amplitude Min=1:Max=10.
     * Контролирует выброс кривой.
     * Чем больше это число, тем больше перерегулирование.
     * @default 1
     * @param {Number|float} period Min = 0.1, :Max = 2.
     * Управляет тем, сколько раз кривая перемещается вперед и назад.
     * Чем меньше это число, тем больше раз кривая движется вперед и назад.
     * @default 0.5
     * @return {string}
     */
    elastic(easing, amplitude, period) {
        return `${easing}(${amplitude},${period})`
    }
})
export const ANIM_PROPERTY = {
    transform: {
        'translateX': 'translateX',
        'translateY': 'translateY',
        'translateZ': 'translateZ',
        'rotate': 'rotate',
        'rotateX': 'rotateX',
        'rotateY': 'rotateY',
        'rotateZ': 'rotateZ',
        'scale': 'scale',
        'scaleX': 'scaleX',
        'scaleY': 'scaleY',
        'scaleZ': 'scaleZ',
        'skew': 'skew',
        'skewX': 'skewX',
        'skewY': 'skewY',
        'perspective': 'perspective'
    }
}

/**
 * construction of options for anime.stagger.js
 * @example
 * let a = new OptionsStragger()
 * a.from = OptionsStragger.from.index(5)
 * a.options->{'from':5}
 */
export class OptionsStragger {
    static from = {
        'first': 'first',
        'last': 'last',
        'center': 'center',
        index: (value) => value
    }
    static direction = {
        'normal': 'normal',
        'reverse': 'reverse'
    }

    static grid = ['rows', 'columns']
    static axis = {
        'x': 'x',
        'y': 'y'
    }


    constructor() {
        this.options = {}
    }

    /**
     *
     * @param {string|number} value
     * @see from
     */
    from(value) {
        this.options['from'] = value
        return this
    }

    /**
     *
     * @param {number} value Starts the staggering effect from a specific value.

     */
    start(value) {
        this.options['start'] = value
        return this
    }

    /**
     *
     * @param {string} value
     * @see direction
     */
    direction(value) {
        this.options['direction'] = value
        return this
    }

    toString() {
        return Object.entries(this.options).toString()
    }
}

/**
 * construction of options for anime.js
 * @example
 * let a = new OptionsAnime().seDuration = 5
 * a.options->{'duration':5}
 */
export class OptionsAnime {

    constructor() {
        this.options = {}

    }

    /**
     * @description this is example.
     * @description she need for documentations
     * @return undefined
     * @param  el
     * @param {Number} index
     * @param {Number} lenArrayElements
     */
    static paseParmets(el, index, lenArrayElements) {

    }

    /**
     * @description Pseudo elements can't be targeted using JavaScript.
     * @description
     * @param {HTMLElement|Array<HTMLElement>|Object|Selection} value
     */
    setTargets(value) {
        this.options['targets'] = value
        return this
    }

    /**
     *
     * @param {Number|function|anime.stagger} value if function she get el,index,lenElements
     * @example
     * duration:12,
     * duration:function(el,index,lenElements){
     *     return index - lenElements
     * }
     */
    setDuration(value) {
        this.options['duration'] = value
        return this
    }

    /**
     * @description Defines the delay in milliseconds of the animation.
     * @param {Number|stagger|paseParmets} value
     */
    setDelay(value) {
        this.options['delay'] = value
        return this
    }

    /**
     * @description Defines the endDelay in milliseconds of the animation.
     * @param {Number|stagger|paseParmets} value
     * @return {OptionsAnime}
     */
    setEndDelay(value) {
        this.options['endDelay'] = value
        return this
    }


    /**
     * @param {string|cubicBezier|spring|steps|elastic|paseParmets|function} value
     * @default 'linear'
     * @see  https://matthewlein.com/tools/ceaser
     * @see EASING
     * @see spring
     * @example
     * easing: 'cubicBezier(.5, .05, .1, .3)',
     * easing: 'easeInOutSine',
     * easing: 'easeInOutSine(amplitude, period)',
     * easing: 'linear'
     * easing: 'spring(mass, stiffness, damping, velocity)'
     * easing: function(el, i, total) {
     *     return function(t) {
     *       return Math.pow(Math.sin(t * (i + 1)), total);
     *     }
     *   }
     */
    setEasing(value) {
        this.options['easing'] = value
        return this
    }

    /**
     *
     * @param {Number} value Округляет значение до x десятичных знаков.
     * @default 0
     * @example
     * anime({
     *   targets: roundLogEl,
     *   innerHTML: [0, 10000],
     *   easing: 'linear',
     *   round: 10 //Округлит анимированное значение до 1 десятичного числа.
     * })
     */
    setRound(value) {
        this.options['round'] = value
        return this
    }

    /**
     *
     * @param {string} value
     * @description 'normal' -
     * Animation progress goes from 0 to 100%.
     * @description 'reverse' -
     * Animation progress goes from 100% to 0%.
     * @description 'alternate' -
     * Animation progress goes from 0% to 100% then goes back to 0%.
     * @default 'normal'
     */
    setDirection(value) {
        this.options['direction'] = value
        return this
    }

    /**
     *
     * @param {number|Boolean} value
     * @description Defines the number of iterations of your animation.
     */
    setLoop(value) {
        this.options['loop'] = value
        return this
    }

    /**
     *
     * @param {Boolean} value
     * @default true
     * @description Defines if the animation should automatically starts or not.
     */
    setAutoplay(value) {
        this.options['autoplay'] = value
        return this
    }

    /**
     *
     * @param {function} value Обратный вызов срабатывает в каждом кадре, как только начинается воспроизведение анимации.
     * @description
     *
     * @example
     *   update: function(anim) {
     *     progressLogEl.value = 'progress : '+Math.round(anim.progress)+'%';
     *     updateLogEl.value = 'updates : '+updates;
     *   }
     */
    setUpdate(value) {
        this.options['update'] = value
        return this
    }


    /**
     *
     * @param {Array<OptionsAnime.options>} value
     */
    setKeyframes(value) {
        this.options['keyframes'] = value
        return this
    }

    /**
     *
     * @param {string} property
     * @param {Number|string|Array<OptionsAnime>|Array} value
     * @param value
     */
    setAnimeProperty(property, value) {
        this.options[property] = value
        return this
    }

    /**

     * @param {function} value обратный вызов срабатывает один раз, когда начинается воспроизведение анимации.
     *
     * @example
     * begin: function(anim) {
     *
     *         beginLogEl.value = 'began : ' + anim.began;
     *     }
     */
    setBegin(value) {
        this.options['begin'] = value
        return this
    }

    /**
     *
     * @param value обратный вызов срабатывает один раз, когда анимация завершена.
     * @example
     * complete: function(anim) {
     *         completeLogEl.value = 'completed : ' + anim.completed;
     *     }
     */
    setComplete(value) {
        this.options['complete'] = value
        return this
    }

    /**
     *
     * @param {function} value обратный вызов запускается один раз при каждом начале цикла.
     * @example
     *   loopBegin: function(anim) {
     *     loopBegan++;
     *     beginLogEl.value = 'loop began : ' + loopBegan;
     *   }
     */
    setLoopBegin(value) {
        this.options['loopBegin'] = value
        return this
    }

    /**
     *
     * @param value обратный вызов запускается один раз при каждом завершении цикла.
     * @example
     *  loopComplete: function(anim) {
     *     loopCompleted++;
     *     completeLogEl.value = 'loop completed : ' + loopCompleted;
     *   }
     */
    setLoopComplete(value) {
        this.options['loopComplete'] = value
        return this
    }

    /**
     *
     * @param {function} value Обратный вызов срабатывает на каждом кадре между delay анимации и endDelay.
     */
    setChange(value) {
        this.options['change'] = value
        return this
    }

    /**
     *
     * @param {function} value обратный вызов запускается каждый раз, когда анимация начинает меняться.
     * @see change
     */
    setChangeBegin(value) {
        this.options['changeBegin'] = value
        return this
    }

    /**
     *
     * @param {function} value  callback is triggered everytime the animation stops changing.
     * @see change
     */
    setChangeComplete(value) {
        this.options['changeComplete'] = value
        return this
    }


    toString() {
        return Object.entries(this.options).toString()
    }
}
