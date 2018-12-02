<template lang="html">
  <transition
    :name="name"
    :enter-active-class="getStateClasses('enter')"
    :leave-active-class="getStateClasses('leave')"
    :duration="_duration"
    @before-enter="setAnimationDuration($event, 'enter')"
    @before-leave="setAnimationDuration($event, 'leave')"
    @after-enter="unsetAnimationDuration"
    @after-leave="unsetAnimationDuration"
    :appear="appear"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'AnimatedTransition',
  props: {
    name: {
      type: String,
      required: false,
      default: ''
    },
    enter: {
      type: [String, Object],
      required: false,
      default: 'slideInLeft'
    },
    leave: {
      type: [String, Object],
      required: false,
      default: 'slideOutRight'
    },
    duration: {
      type: [String, Number, Object],
      required: false,
      default: 1000
    },
    appear: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    _duration () {
      return {
        enter: this.enter.duration ?
          this.enter.duration :
          this.duration.enter || this.duration,
        leave: this.leave.duration ?
          this.leave.duration :
          this.duration.leave || this.duration
      }
    }
  },
  methods: {
    getStateClasses (state) {
      return [
        this.name && `${this.name}-${state}-active`,
        this[state].name ? this[state].name : this[state],
        'animated'
      ].filter(v => v).join(' ')
    },
    setAnimationDuration (el, state) {
      el.style.animationDuration = `${this._duration[state]}ms`
    },
    unsetAnimationDuration (el) {
      el.style.animationDuration = "unset"
    }
  }
}
</script>
