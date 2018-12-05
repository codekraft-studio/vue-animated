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

    this.render = (createEl, {data, props, children}) => {
      const elName = 'transition'
      const attrs = data.attrs || {}
      props = props || {}
      const elData = {
        attrs,
        props: {
          name: name,
          enterActiveClass: this.enterClass || props.enter,
          leaveActiveClass: this.leaveClass || props.leave
        },
        on: {
          beforeEnter: el => this.setAnimationDuration(el, 'enter'),
          beforeLeave: el => this.setAnimationDuration(el, 'leave'),
          afterEnter: this.unsetAnimationDuration,
          afterLeave: this.unsetAnimationDuration,
          enterCancelled: this.unsetAnimationDuration,
          leaveCancelled: this.unsetAnimationDuration
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
