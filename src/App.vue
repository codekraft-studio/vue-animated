<template>
  <div id="app">
    <section class="hero is-dark is-medium">
      <div class="hero-body">
        <div class="container logo">
          <img alt="Vue logo" src="./assets/logo.png">
          <div>
            <h1 class="title">Vue Animated</h1>
            <h2 class="subtitle">transitions support for <a href="#">Animate.css</a></h2>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <div class="content">
              <h1 class="headline">Access many animations easily</h1>
              This plugin provide a functional <strong>animated</strong> component which
              can handle all the different animations provieded by animate.css to turn
              them into transition components, but also provide a set of custom
              functional components that maps, as much as possible, the animate.css
              animation names, for example <strong>AnimatedBounce</strong> will bind
              the bounce animation to the component.
            </div>

            <div class="controls-container has-text-centered">
              <div class="animation-names columns">
                <div class="enter-animation column">
                  <div class="field">
                    <label class="label is-large">Enter animation</label>
                    <div class="select">
                      <AnimationSelect v-model="exampleTwo.enter.name" />
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input type="number" class="input" v-model="exampleTwo.enter.duration">
                    </div>
                  </div>
                </div>
                <div class="leave-animation column">
                  <div class="field">
                    <label class="label is-large">Leave animation</label>
                    <div class="select">
                      <AnimationSelect v-model="exampleTwo.leave.name" />
                    </div>
                  </div>

                  <div class="field">
                    <input type="number" class="input" v-model="exampleTwo.leave.duration">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-half">
            <div class="transition-container absolute">
              <Animated
                :enter="exampleTwo.enter.name"
                :leave="exampleTwo.leave.name"
                :duration="{enter: exampleTwo.enter.duration, leave: exampleTwo.leave.duration}"
                @before-enter="exampleTwo.loading = true"
                @after-enter="exampleTwo.loading = false"
                @before-leave="exampleTwo.loading = true"
                @after-leave="exampleTwo.loading = false"
              >
                <div :key="exampleTwo.visible" class="animation-box"></div>
              </Animated>
            </div>

            <div class="field has-text-centered" style="margin-top: 25px;">
              <button class="button is-primary is-large" :class="{'is-loading': exampleTwo.loading}" @click="exampleTwo.visible = !exampleTwo.visible">
                Toggle
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="content">
              <h1 class="headline">Handle the animation duration</h1>
              When using animate.css with vue transitions one of the problem is
              to override the default animation duration, since the duration prop
              is applied to the javascript while animate.css wants the animation
              duration defined at element style level. The provided functional components
              will take care of that and you will be able to bound a
              <strong>custom animation duration</strong> as you normally would
              do with transitions.
            </div>
            <div class="controls-container">
              <label class="label is-large">Duration</label>
              <div class="field has-addons">
                <div class="control">
                  <input type="number" class="input is-large" v-model="exampleOne.duration" placeholder="Animation duration">
                </div>
                <div class="control">
                  <button class="button is-primary is-large" :class="{'is-loading': exampleOne.loading}" @click="exampleOne.visible = !exampleOne.visible">
                    {{exampleOne.visible ? 'Hide' : 'Show'}}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="transition-container">
              <AnimatedSwing
                :duration="exampleOne.duration"
                @before-enter="exampleOne.loading = true"
                @after-enter="exampleOne.loading = false"
                @before-leave="exampleOne.loading = true"
                @after-leave="exampleOne.loading = false"
              >
                <div v-if="exampleOne.visible" class="animation-box"></div>
              </AnimatedSwing>

              <AnimatedShake :duration="exampleOne.duration">
                <div v-if="exampleOne.visible" class="animation-box"></div>
              </AnimatedShake>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-three-fifths">
            <div class="content">
              <h1 class="headline">Play with animation modes</h1>
              The plugin act as an overlay to the transition component so it
              will support all the properties and events that are supported from
              the original component, including animation mode.
              You can always refer to the <a href="https://vuejs.org/v2/guide/transitions.html#Transition-Modes">original documentation</a>
              to see how these attributes are exactly used.

              Animation mode comes handy when you want to obtain different effects
              with the same animation without alter the source code.
            </div>
          </div>
          <div class="column">

            <div class="field is-horizontal">
              <div class="field-body is-vcentered">
                <div class="field is-expanded">
                  <label class="radio">
                    <input type="radio" value="out-in" v-model="exampleThree.mode">
                    Out in
                  </label>
                  <label class="radio">
                    <input type="radio" value="in-out" v-model="exampleThree.mode">
                    In Out
                  </label>
                </div>

                <div class="field is-narrow">
                  <div class="control">
                    <input type="number" class="input" v-model="exampleThree.duration" placeholder="Animation duration">
                  </div>
                </div>
              </div>
            </div>

            <div class="transition-container single">
              <Animated leave="fadeOut" :mode="exampleThree.mode" :duration="exampleThree.duration">
                <div :key="exampleThree.mode" class="animation-box"></div>
              </Animated>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AnimationSelect from './components/AnimationSelect.vue'

export default {
  name: 'app',
  components: {
    AnimationSelect
  },
  data () {
    return {
      exampleOne: {
        visible: true,
        loading: false,
        duration: 1000
      },
      exampleTwo: {
        visible: true,
        loading: false,
        enter: {
          name: 'slideInRight',
          duration: 1000
        },
        leave: {
          name: 'slideOutLeft',
          duration: 1000
        }
      },
      exampleThree: {
        mode: 'out-in',
        duration: 1000
      }
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

$primaryColor: #41b883;

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
  width: 100%;
  min-height: 100vh;
  a, strong, label {
    color: $primaryColor;
  }

  .is-vcentered {
    align-items: center;
  }

  .section {
    margin-bottom: 100px;
  }

  .select, select {
    width: 100%;
  }

  select, input {
    margin: 0;
  }

  .hero {
    margin-bottom: 100px;
    a {
      text-decoration: none;
    }
  }

  .container {
    &.logo {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 88px;
        margin-right: 16px;
      }
    }

    section {
      margin: 0 0 150px;
    }
  }

  .transition-container {
    position: relative;
    min-height: 250px;
    border: thin solid $primaryColor;
    justify-content: space-around;
    overflow: hidden;
    display: flex;
    align-items: center;
    .animation-box {
      color: white;
      line-height: 100px;
      width: 100px;
      height: 100px;
      background-color: $primaryColor;
      border-radius: 6px;
    }

    &.absolute {
      .animation-box {
        position: absolute;
        left: calc(50% - 50px);
      }
    }

    &.single {
      justify-content: center;
    }
  }
}
</style>
