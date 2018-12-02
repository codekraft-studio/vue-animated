<template>
  <div id="app">
    <header class="header">
      <img alt="Vue logo" src="./assets/logo.png">
      <div class="">
        <h1>Vue Animated</h1>
        <h2>transition component for <a href="#">Animate.css</a></h2>
      </div>
    </header>

    <section>
      <div class="transition-container">
        <AnimatedTransition :enter="enterAnimation" :leave="leaveAnimation">
          <div v-if="show" class="box"></div>
        </AnimatedTransition>
      </div>

      <button class="show-button" @click="show = !show">
        {{show ? 'Hide' : 'Show'}}
      </button>

      <div class="controls-container">
        <div class="enter-animation">
          <h3 class="headline">Enter animation</h3>
          <div class="form-group">
            <AnimationSelect v-model="enterAnimation.name" />
          </div>

          <div class="form-group">
            <input type="number" v-model="enterAnimation.duration">
          </div>
        </div>

        <div class="leave-animation">
          <h3 class="headline">Leave animation</h3>

          <div class="form-group">
            <AnimationSelect v-model="leaveAnimation.name" />
          </div>

          <div class="form-group">
            <input type="number" v-model="leaveAnimation.duration">
          </div>
        </div>
      </div>
  </section>
  </div>
</template>

<script>
import 'animate.css/animate.css'
import AnimatedTransition from './components/AnimatedTransition.vue'
import AnimationSelect from './components/AnimationSelect.vue'

export default {
  name: 'app',
  components: {
    AnimatedTransition,
    AnimationSelect
  },
  data () {
    return {
      show: false,
      enterAnimation: {
        name: 'slideInRight',
        duration: 1000
      },
      leaveAnimation: {
        name: 'slideOutLeft',
        duration: 1000
      }
    }
  },
  computed: {
    exampleCode () {
      return `
        <AnimatedTransition :enter="enterAnimation" :leave="leaveAnimation">
          <div v-if="show" class="box"></div>
        </AnimatedTransition>
      `
    }
  }
}
</script>

<style lang="scss">
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  a {
    text-decoration: none;
    color: #41b883;
  }
}

header.header {
  width: 100%;
  height: 100px;
  padding: 10px;
  margin: 0 auto 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;

  h1, h2 {
    margin: 0;
  }

  h2 {
    color: #476786;
  }

  img {
    max-height: 100%;
    margin-right: 16px;
  }
}

section {
  max-width: 800px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 10px;
}

.show-button {
  background-color: #41b883;
  border: thin solid #41b883;
  width: 100%;
  height: 100%;
  min-height: 50px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: bold;
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto 32px;
  padding: 0;
}

.transition-container {
  position: relative;
  height: 400px;
  border: 2px solid #41b883;
  margin: 0 auto 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  .box {
    width: 128px;
    height: 128px;
    background-color: #41b883;
    margin: 0 auto;
    vertical-align: middle;
  }
}

.controls-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  .headline {
    color: #41b883;
    margin: 0 0 10px;
  }

  .enter-animation {
    text-align: right;
    margin-right: 10px;
  }
  .leave-animation {
    text-align: left;
    margin-left: 10px;
  }
}
</style>
