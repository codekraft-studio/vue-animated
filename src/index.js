import 'animate.css/animate.css'
import AnimatedGeneric from './AnimatedGeneric'

let animations = [
  'bounce',
  'flash',
  'pulse',
  'rubber-band',
  'shake',
  'head-shake',
  'swing',
  'tada',
  'wobble',
  'jello',
  'heart-beat',
  'hinge',
  'flip'
]

function componentName(input) {
  return `animated-${input}`
    .match(/[a-z]+/gi)
    .map(w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())
    .join('')
}

export {
  AnimatedGeneric
}

export default function install(Vue, opts = {}) {
  opts = {
    functional: false,
    duration: 1000,
    ...opts
  }

  // Register the generic animation component
  Vue.component('Animated', new AnimatedGeneric(null, opts))

  if (opts.functional) {
    if (Array.isArray(opts.functional)) {
      animations = opts.functional
    }

    animations.map(animation => {
      const name = componentName(animation)
      Vue.component(name, new AnimatedGeneric(animation, opts))
    })
  }
}
