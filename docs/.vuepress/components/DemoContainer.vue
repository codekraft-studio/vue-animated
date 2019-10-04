<template lang="html">
  <div class="demo-container">
    <div class="demo-controls">
      <slot name="controls">
        <button class="demo-toggle" @click="toggle">Toggle</button>
      </slot>
    </div>
    <slot name="content" :toggler="show"></slot>
  </div>
</template>

<script>
export default {
  name: "DemoContainer",
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

<style lang="css">
.demo-container {
  width: 100%;
  height: 250px;
  background-color: #eee;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.demo-controls {
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
