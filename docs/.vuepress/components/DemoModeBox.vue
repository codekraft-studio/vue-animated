<template lang="html">
  <div class="demo-container">
    <div class="demo-controls">
      <input type="radio" value="out-in" id="outin" v-model="mode">
      <label for="outin">Out in</label>
      <input type="radio" value="in-out" id="inout" v-model="mode">
      <label for="inout">In out</label>
    </div>
    <Animated :name="name" :enter="enter" :leave="leave" :duration="duration" :mode="mode">
      <div :key="mode" class="demo-box"></div>
    </Animated>
  </div>
</template>

<script>
export default {
  name: "DemoModeBox",
  props: ["name", "enter", "leave", "duration"],
  data () {
    return {
      mode: "out-in"
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
.demo-controls {
  position: absolute;
  right: 5px;
  top: 5px;
}
.demo-box {
  margin: 2px;
  width: 100px;
  height: 100px;
  background-color: #3eaf7c;
}
</style>
