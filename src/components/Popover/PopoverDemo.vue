<template>
  <Demo :component="PopoverDefaultDemo" />
  <!-- <Demo :component="PopoverPositionDemo" /> -->
  <Demo :component="PopoverWidthDemo" />
  <Demo :component="PopoverCloseDemo" />
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import PopoverDefaultDemo from "./Popover.default.demo.vue";
import PopoverPositionDemo from "./Popover.position.demo.vue";
import PopoverWidthDemo from "./Popover.width.demo.vue";
import PopoverCloseDemo from "./Popover.close.demo.vue";

export default {
  components: { Demo },
  setup() {
    return {
      PopoverDefaultDemo,
      PopoverPositionDemo,
      PopoverWidthDemo,
      PopoverCloseDemo,
    };
  },
};
</script>