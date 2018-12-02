import { shallowMount } from '@vue/test-utils'
import AnimatedTransition from '@/components/AnimatedTransition'

describe('AnimatedTransition', () => {
  it('render empty if no slot', () => {
    const wrapper = shallowMount(AnimatedTransition)
    expect(wrapper.text()).toBe('')
    expect(wrapper.html()).toBeUndefined()
  })

  it('render the default slot', () => {
    const wrapper = shallowMount(AnimatedTransition, {
      slots: {
        default: '<span>testing</span>'
      }
    })
    expect(wrapper.text()).toBe('testing')
    expect(wrapper.html()).toMatch('enter-active-class')
    expect(wrapper.html()).toMatch('leave-active-class')
  })

  it('allow custom transition name together with animated', () => {
    const wrapper = shallowMount(AnimatedTransition, {
      propsData: {
        name: 'testing',
        enter: 'enter-test',
        leave: 'leave-test'
      },
      slots: {
        default: '<span>testing</span>'
      }
    })
    expect(wrapper.html()).toMatch('name="testing"')
    expect(wrapper.html()).toMatch('enter-test animated')
    expect(wrapper.html()).toMatch('leave-test animated')
    expect(wrapper.html()).toMatch('testing-enter-active')
    expect(wrapper.html()).toMatch('testing-leave-active')
  })

  it('accept duration as string', () => {
    const wrapper = shallowMount(AnimatedTransition, {
      propsData: {
        duration: "1000"
      }
    })
    expect(wrapper.vm._duration).toMatchObject({
      enter: "1000",
      leave: "1000"
    })
  })

  it('accept duration as number', () => {
    const wrapper = shallowMount(AnimatedTransition, {
      propsData: {
        duration: 1000
      }
    })
    expect(wrapper.vm._duration).toMatchObject({
      enter: 1000,
      leave: 1000
    })
  })

  it('accept duration as object', () => {
    const duration = {
      enter: 2500,
      leave: 500
    }
    const wrapper = shallowMount(AnimatedTransition, {
      propsData: {
        duration
      }
    })
    expect(wrapper.vm._duration).toMatchObject(duration)
  })

  it('set the event duration if specified over duration', () => {
    const wrapper = shallowMount(AnimatedTransition, {
      propsData: {
        enter: {
          name: 'slideInLeft',
          duration: 1000
        },
        duration: 5000
      }
    })
    expect(wrapper.vm._duration).toMatchObject({
      enter: 1000,
      leave: 5000
    })
  })

  it('update the element animation delay', () => {
    const animationObject = {
      enter: {
        name: 'entering',
        duration: 6000
      },
      leave: {
        name: 'leaving',
        duration: 1500
      }
    }
    const wrapper = shallowMount(AnimatedTransition, {
      propsData: animationObject,
      slots: {
        default: '<span>testing</span>'
      }
    })
    wrapper.vm.setAnimationDuration(wrapper.element, 'enter')
    expect(wrapper.element.style.animationDuration).toBe(`${animationObject.enter.duration}ms`)

    wrapper.vm.setAnimationDuration(wrapper.element, 'leave')
    expect(wrapper.element.style.animationDuration).toBe(`${animationObject.leave.duration}ms`)

    wrapper.vm.unsetAnimationDuration(wrapper.element)
    expect(wrapper.element.style.animationDuration).toBe('unset')
  })
})
