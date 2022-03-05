<template>
  <Demo :component="ToastDefaultDemo" />
  <Demo :component="ToastTypeDemo" />
  <Demo :component="ToastCenterDemo" />
  <Demo :component="ToastCloseDemo" />
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import ToastDefaultDemo from './Toast.default.demo.vue';
import ToastTypeDemo from './Toast.type.demo.vue';
import ToastCenterDemo from './Toast.center.demo.vue';
import ToastCloseDemo from './Toast.close.demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
        ToastDefaultDemo,
        ToastTypeDemo,
        ToastCenterDemo,
        ToastCloseDemo
    };
  },
};
</script>
