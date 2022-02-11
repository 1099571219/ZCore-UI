<template>
  <router-view></router-view>
</template>

<script lang='ts'>
import { ref } from "vue";
import { provide } from "vue";
export default {
  name: "App",
  setup() {
    const menuVisible = ref(false);
    provide("menuVisible", menuVisible);
  },
};
</script>
