<template lang="html">
  <DemoContainer>
    <template slot="controls">
      <input type="radio" value="out-in" id="outin" v-model="mode">
      <label for="outin">Out in</label>
      <input type="radio" value="in-out" id="inout" v-model="mode">
      <label for="inout">In out</label>
    </template>
    <template slot="content">
      <Animated :name="name" :enter="enter" :leave="leave" :duration="duration" :mode="mode">
        <div :key="mode" class="demo-box"></div>
      </Animated>
    </template>
  </DemoContainer>
</template>

<script>
import DemoContainer from "./DemoContainer"
export default {
  name: "DemoModeBox",
  props: ["name", "enter", "leave", "duration"],
  components: {DemoContainer},
  data () {
    return {
      mode: "out-in"
    }
  }
}
</script>

<style lang="css" scoped>
.demo-box {
  margin: 2px;
}
</style>
