import { createLocalVue, mount } from '@vue/test-utils'
import AnimatedGeneric from '../../lib/AnimatedGeneric'

const localVue = createLocalVue()
localVue.component('animated', new AnimatedGeneric(null, {
  duration: 500
}))

describe('AnimatedGeneric class', () => {
  const TestComponent = {
    name: 'test-component',
    template: `
      <div>
        <animated enter="bounce">
          <div>TEST</div>
        </animated>
      </div>
    `
  }

  it("set the animation name", () => {
    const animationName = 'test'
    const TestAnimation = new AnimatedGeneric(animationName, {
      duration: 500
    })
    expect(TestAnimation.name).toBe(animationName)
  })

  it('render the default slot', () => {
    const wrapper = mount(TestComponent, {localVue})
    expect(wrapper.text()).toBe('TEST')
    expect(wrapper.html()).toMatch('enter="bounce"')
  })
})
