<template>
  <h1>Card -- 示例</h1>
  <demo :component="Card1Demo" />
  <demo :component="Card2Demo" />
  <demo :component="Card3Demo" />
  <demo :component="Card4Demo" />
  <demo :component="Card5Demo" />
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Card1Demo from "./CardDemo1.vue";
import Card2Demo from "./CardDemo2.vue";
import Card3Demo from "./CardDemo3.vue";
import Card4Demo from "./CardDemo4.vue";
import Card5Demo from "./CardDemo5.vue";

export default {
  components: { Demo },
  setup() {
    return {
      Card1Demo,
      Card2Demo,
      Card3Demo,
      Card4Demo,
      Card5Demo,
    };
  },
};
</script>
