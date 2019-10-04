<template lang="html">
  <div class="demo-container">
    <button class="demo-toggle" @click="toggle">Toggle</button>
    <Animated :name="name" :enter="enter" :leave="leave" :duration="duration">
      <div v-if="show" class="demo-box"></div>
    </Animated>
  </div>
</template>

<script>
export default {
  name: "DemoBox",
  props: ["name", "enter", "leave", "duration"],
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="css" scoped>
.demo-container {
  width: 100%;
  height: 250px;
  background-color: #eee;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.demo-toggle {
  position: absolute;
  right: 5px;
  top: 5px;
}
.demo-box {
  width: 100px;
  height: 100px;
  background-color: #3eaf7c;
}
</style>
