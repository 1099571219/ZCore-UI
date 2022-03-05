<demo>
  Input v-model
</demo>

<template>
  <Input v-model:value="value" placeholder="please input content" @update:value="handleUpdate" />
  input value: {{ value }}
</template>

<script lang="ts">
import { ref } from 'vue';
import  Input from '../../lib/Input.vue';

export default {
  components: { Input },
  setup() {
    const value = ref('');
    const handleUpdate = (newValue: string) => {
      console.log('input get new value', newValue);
    };
    return { value, handleUpdate };
  },
};
</script>
