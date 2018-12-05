<template>
  <div id="app">
    <header class="header">
      <img alt="Vue logo" src="./assets/logo.png">
      <div class="">
        <h1>Vue Animated</h1>
        <h2>transition component for <a href="#">Animate.css</a></h2>
      </div>
    </header>

    <section class="container">
      <div class="transition-container absolute">
        <Animated
          :enter="exampleTwo.enter.name"
          :leave="exampleTwo.leave.name"
          :mode="exampleTwo.mode"
          :duration="{enter: exampleTwo.enter.duration, leave: exampleTwo.leave.duration}"
        >
          <div :key="exampleTwo.visible" class="box">MODE</div>
        </Animated>
      </div>

      <div class="controls-container">
        <div class="animation-mode">
          <h2 class="headline">Animation Mode</h2>

          <input type="radio" value="out-in" v-model="exampleTwo.mode">Out in
          <input type="radio" value="in-out" v-model="exampleTwo.mode">In Out
        </div>

        <div class="animation-names">
          <div class="enter-animation">
            <h2 class="headline">Enter animation</h2>
            <div class="form-group">
              <AnimationSelect v-model="exampleTwo.enter.name" />
            </div>

            <div class="form-group">
              <input type="number" v-model="exampleTwo.enter.duration">
            </div>
          </div>
          <div class="leave-animation">
            <h2 class="headline">Leave animation</h2>

            <div class="form-group">
              <AnimationSelect v-model="exampleTwo.leave.name" />
            </div>

            <div class="form-group">
              <input type="number" v-model="exampleTwo.leave.duration">
            </div>
          </div>
        </div>

        <button class="show-button" @click="exampleTwo.visible = !exampleTwo.visible">Toggle</button>
      </div>
    </section>

    <section class="container">
      <div class="transition-container">
        <AnimatedSwing :duration="exampleOne.duration">
          <div v-if="exampleOne.visible" class="box">SWING</div>
        </AnimatedSwing>

        <AnimatedShake :duration="exampleOne.duration">
          <div v-if="exampleOne.visible" class="box">SHAKE</div>
        </AnimatedShake>
      </div>

      <div class="controls-container">
        <div class="row">
          <h2 class="headline">Duration</h2>
        </div>

        <div class="form-group">
          <input type="number" v-model="exampleOne.duration">
        </div>

        <button class="show-button" @click="exampleOne.visible = !exampleOne.visible">
          {{exampleOne.visible ? 'Hide' : 'Show'}}
        </button>
      </div>
    </section>

    <footer>
      <p>
        The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        Made with &hearts; by <a href="https://github.com/codekraft-studio">Codekraft Studio</a>.
      </p>
    </footer>
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
        duration: 1000
      },
      exampleTwo: {
        visible: true,
        mode: 'out-in',
        enter: {
          name: 'slideInRight',
          duration: 1000
        },
        leave: {
          name: 'slideOutLeft',
          duration: 1000
        }
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
* {
  box-sizing: border-box;
}

$primaryColor: #41b883;
$bgColor: #eee;

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
    color: $primaryColor;
  }
}

header {
  background-color: $bgColor;
  width: 100%;
  height: 150px;
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
    max-height: 64px;
    margin-right: 16px;
  }
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 50px;
  padding: 25px 0;
  .transition-container {
    width: 500px;
    margin: 0;
  }
  .controls-container {
    margin-left: 32px;
  }
}
footer {
  width: 100%;
  height: 100px;
  background-color: $bgColor;
  position: fixed;
  bottom: 0;
}

.form-group {
  margin-bottom: 10px;
}

.show-button {
  background-color: $primaryColor;
  border: thin solid $primaryColor;
  height: 100%;
  color: white;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: bold;
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto 32px;
  padding: 12px 24px;
  display: block;
}

.transition-container {
  position: relative;
  height: 350px;
  border: 2px solid $primaryColor;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  justify-content: space-around;
  overflow: hidden;
  display: flex;
  align-items: center;
  .box {
    color: white;
    line-height: 100px;
    width: 100px;
    height: 100px;
    background-color: $primaryColor;
    border-radius: 6px;
  }

  &.absolute {
    .box {
      position: absolute;
      left: calc(50% - 50px);
    }
  }
}

.controls-container {
  margin-left: 32px;
  width: 500px;

  & > div {
    margin-bottom: 16px;
  }

  .headline {
    color: $primaryColor;
    margin: 0 0 10px;
  }

  .animation-names {
    display: flex;
    justify-content: center;
    .enter-animation {
      text-align: right;
      margin-right: 10px;
    }
    .leave-animation {
      text-align: left;
      margin-left: 10px;
    }
  }
}
</style>
