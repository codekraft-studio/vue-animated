import 'animate.css/animate.css'
import AnimatedGeneric from './AnimatedGeneric'

const animations = [
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

const defaultDuration = 1000

export default function install (Vue, opts = {
  functional: false,
  defaultDuration: defaultDuration
}) {
  const instOpts = Object.assign({
    duration: defaultDuration
  }, opts || {})

  Vue.component('Animated', new AnimatedGeneric(null, instOpts))

  if (opts.functional) {
    for (var i = 0; i < animations.length; i++) {
      const animationName = animations[i]
      const componentName = `animated-${animationName}`
        .match(/[a-z]+/gi)
        .map(w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())
        .join('')
      Vue.component(componentName, new AnimatedGeneric(animationName, instOpts))
    }
  }
}
