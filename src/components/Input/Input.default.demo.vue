<demo>常规用法</demo>

<template>
  <Input v-model:value="value" placeholder="please input username" />
</template>

<script lang="ts">
import { ref } from 'vue';
import Input  from '../../lib/Input.vue';

export default {
  components: { Input },
  setup() {
    const value = ref('');
    return { value };
  },
};
</script>
