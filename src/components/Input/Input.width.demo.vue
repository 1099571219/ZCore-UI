<demo>
  支持 width
</demo>

<template>
  <Input v-model:value="value" width="100%" placeholder="width: 100%" />
</template>

<script lang="ts">
import { ref } from 'vue';
import  Input from '../../lib/Input.vue';

export default {
  components: { Input },
  setup() {
    const value = ref('');
    return { value };
  },
};
</script>
