<demo>
支持 clearable
</demo>

<template>
  <Input
    v-model:value="value"
    placeholder="clearable"
    clearable
    @clear="handleClear"
  />
</template>

<script lang="ts">
import { ref } from "vue";
import Input from '../../lib/Input.vue'

export default {
  components: { Input },
  setup() {
    const value = ref("");
    const handleClear = () => {
      console.log("clear input value");
    };
    return { value, handleClear };
  },
};
</script>
