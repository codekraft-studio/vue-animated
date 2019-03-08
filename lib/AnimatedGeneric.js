/**
 * Generic animation bindings for animate.css
 * when a empty or undefined name is passed
 * the animation state classes are built using the
 * context properties, otherwise are forced to use the
 * component generated properties based on the name itself
 * @type {Object}
 */
export default class AnimatedGeneric {
  constructor(name, opts = {
    duration: 1000
  }) {
    this.name = name
    this.functional = true

    this.enterClass = name ? `${name} ${name}-enter-active` : false
    this.leaveClass = name ? `${name} ${name}-leave-active` : false

    this.render = (createEl, {data, props, listeners, children}) => {
      props = props || {}

      const noop = () => {};
      const elName = 'transition'
      const attrs = data.attrs || {}
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

      const elData = {
        attrs,
        props: {
          name: name,
          enterActiveClass: this.enterClass || props.enter,
          leaveActiveClass: this.leaveClass || props.leave
        },
        on: {
          beforeEnter: (event) => {
            this.setAnimationDuration(event, 'enter')
            elListeners['before-enter'](event)
          },
          beforeLeave: (event) => {
            this.setAnimationDuration(event, 'leave')
            elListeners['before-leave'](event)
          },
          afterEnter: (event) => {
            this.unsetAnimationDuration(event)
            elListeners['after-enter'](event)
          },
          afterLeave: (event) => {
            this.unsetAnimationDuration(event)
            elListeners['after-leave'](event)
          },
          enterCancelled: (event) => {
            this.unsetAnimationDuration(event)
            elListeners['enter-cancelled'](event)
          },
          leaveCancelled: (event) => {
            this.unsetAnimationDuration(event)
            elListeners['leave-cancelled'](event)
          }
        }
      }
      this.duration = attrs.duration || opts.duration
      return createEl(elName, elData, children)
    }

    this.setAnimationDuration = (el, state) => {
      el.style.animationDuration = `${this.duration[state] || this.duration}ms`
    }
    this.unsetAnimationDuration = (el) => {
      el.style.animationDuration = "unset"
    }
  }
}
