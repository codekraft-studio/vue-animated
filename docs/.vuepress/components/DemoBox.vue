<template lang="html">
  <DemoContainer>
    <template slot="content" slot-scope="{toggler}">
      <Animated :name="name" :enter="enter" :leave="leave" :duration="duration">
        <div v-if="toggler" class="demo-box"></div>
      </Animated>
    </template>
  </DemoContainer>
</template>

<script>
import DemoContainer from "./DemoContainer"
export default {
  name: "DemoBox",
  props: ["name", "enter", "leave", "duration"],
  components: {DemoContainer}
}
</script>
