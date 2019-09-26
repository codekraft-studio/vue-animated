function setAnimationDuration(el, duration, state) {
  el.style.animationDuration = `${duration[state] || duration}ms`
}

function unsetAnimationDuration(el) {
  el.style.animationDuration = "unset"
}

const noop = () => {};

/**
 * Generic animation bindings for animate.css
 * when a empty or undefined name is passed
 * the animation state classes are built using the
 * context properties, otherwise are forced to use the
 * component generated properties based on the name itself
 */
export default class AnimatedGeneric {
  constructor(name, opts = {
    duration: 1000
  }) {
    this.name = name
    this.functional = true

    // Set static animation class properties based on
    // given animation name or leave it blank to use
    // user provided animation name in props
    this.enterClass = name && `${name} ${name}-enter-active`
    this.leaveClass = name && `${name} ${name}-leave-active`

    this.render = (createEl, {
      data,
      children,
      props = {},
    }) => {
      const {
        attrs = {},
        on: listeners = {},
      } = data

      // TODO: Add support for transition-group components
      const elName = 'transition'

      // Ensure all listeners exists so redirect won't fail
      const elListeners = [
        'before-enter',
        'before-leave',
        'after-enter',
        'after-leave',
        'enter-cancelled',
        'leave-cancelled',
      ].reduce((obj, l) => ({
        ...obj,
        [l]: listeners[l] || noop
      }), {})

      const animName = name || props.name

      // Get custom animation duration or fallback to default
      const duration =  props.duration || opts.duration

      // Prepare the transition context
      const elData = {
        attrs,
        props: {
          name: animName,
          enterActiveClass: this.enterClass || props.enter || animName,
          leaveActiveClass: this.leaveClass || props.leave || animName
        },
        on: {
          beforeEnter: (el) => {
            setAnimationDuration(el, duration, 'enter')
            elListeners['before-enter'](el)
          },
          beforeLeave: (el) => {
            setAnimationDuration(el, duration, 'leave')
            elListeners['before-leave'](el)
          },
          afterEnter: (el) => {
            unsetAnimationDuration(el)
            elListeners['after-enter'](el)
          },
          afterLeave: (el) => {
            unsetAnimationDuration(el)
            elListeners['after-leave'](el)
          },
          enterCancelled: (el) => {
            unsetAnimationDuration(el)
            elListeners['enter-cancelled'](el)
          },
          leaveCancelled: (el) => {
            unsetAnimationDuration(el)
            elListeners['leave-cancelled'](el)
          }
        }
      }

      return createEl(elName, elData, children)
    }
  }
}
